# Contribution

List of contribution conventions to follow.
Aim here is:
- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of commits landed).
- Communicating the nature of changes to teammates, the public, and other stakeholders.
- Triggering build and publish processes.
- Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

## Conventional Commits

A convention providing a set of rules for creating an explicit commit history.

Following the [specification](https://www.conventionalcommits.org/en/v1.0.0/#summary) - strongly recommended to read that, some basic info copied below:

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
2. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
3. BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
4. types other than 'fix' and 'feat' are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends:
- build
- chore
- ci
- docs
- feat
- fix
- improvement
- perf
- refactor
- revert
- style
- test
and others.
5. footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

Additional types are not mandated by the conventional commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE).

A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., _feat(parser): Add ability to parse arrays_

In our case we usually commit with a one line message, since the working examples would be:
```

fix: Correct minor typos in code BZ2-1234

feat: Allow provided config object to extend other configs BZ2-1234

refactor!: Drop support for Node 6 BZ2-1234

feat(lang): Add Polish language BZ2-1234

```

### Pull request

Pull request title should follow above conventional commits rules e.g. _feat: Added ABC integration BZ2-1234_. When merging hotfix, fix, feature branch into main branches ie. _dev_, _release_ or _master_ then check PR commit message (correct commit messages, remove duplications, add release notes) and use 'Squash and merge'.

### Linting commits

A common tool for that is [commitlint](https://commitlint.js.org/) which can be set with husky (git hook helper) to use locally. See instructions [here](https://commitlint.js.org/#/guides-local-setup?id=install-husky).

Additionally we can integrate Commitlint with CI - invalid commits may be rejected even if somehow got committed (suppressing git hooks or so).
One of the possible options would be setting a [GitHub_App](https://probot.github.io/apps/commitlint/) that runs commitlint over all commits of new or edited pull requests and sets an appropriate status check.

### Custom configuration

Any settings of the predefined conventiones can be overriden or extended. Detailed configuration options can be found on the official [documentation](https://commitlint.js.org/#/reference-configuration) and the list of [rules](https://commitlint.js.org/#/reference-rules).

## Process

Read https://nvie.com/posts/a-successful-git-branching-model/ which describes release process.

### Hotfix

Hotfixes are high priority fixes required for the live system. They should be done in branch created from _master_ branch to skip prerelease and release process.

1. Create fix branch from _master_ branch, use 'fix/' as prefix + JIRA ID e.g. _fix/BZ2-1234_
2. Create pull request (_fix/ID_ branch to _master_ branch) with title using conventional commit format, include JIRAID at the end, e.g. 'fix: Fixed authentication in ABC integration BZ2-1234'
3. Check result from SonarCloud integration (fix bugs / code smells, remove duplications)
4. Check PR commit message (correct commit messages, remove duplications, add release notes)
5. Merge pull request using 'Squash and merge'
6. Merge _master_ branch to _dev_ branch
7. Delete fix branch

#### Example

Starting version is 0.1.1

1. Create _fix/BZ2-1234_ branch from master
2. Commit updates to _fix/BZ2-1234_ branch
3. Create pull request (_fix/BZ2-1234_ branch to _master_ branch)  with 'fix: Fixed logging in ABC integration BZ2-1234' title, use 'Release' as title and 'release' label
4. Merge pull request using 'Squash and merge'

This will create 0.1.2 version.

### Feature / fix

Feature / fix are standard updates which will follow prerelease and release process.

1. Create feature / fix branch from _master_ branch, you can use JIRA ID e.g. _BZ2-1234_ as branch name. If adding feature / fix for anything not yet in _master_ or _release_ branches then use _dev_ branch, if adding feature / fix for code in current release then use _release_ branch
2. Create pull request (feature/fix branch to _dev_ or _release_ branches depends which branch it was created from) with title using conventional commit format, e.g. 'fix: Fixed authentication in ABC integration BZ2-1234', add label, assign for review and update description with testing/release notes
3. Check result from SonarCloud integration (fix bugs / code smells, remove duplications)
4. Check PR commit message (correct commit messages, remove duplications, add release notes)
5. Merge pull request using 'Squash and merge', if you don't have permission to merge then ask 'release' person (someone who can merge to _release_ and _master_ branches, this set in GitHub branch protection rules)
6. Delete feature / fix branch branch

#### Example 1

Starting version is 0.1.1

1. Create _BZ2-1234_ branch from _master_ branch
2. Commit updates to _BZ2-1234_ branch
3. Create pull request (_BZ2-1234_ branch to _release_ branch) with 'feat: Added XYZ integration BZ2-1234' title
4. Merge pull request using 'Squash and merge'
5. Delete _BZ2-1234_ branch

This will create 0.2.0-alpha version.

#### Example 2

1. Create _BZ2-1234_ branch from _dev_ or _release_ branch
2. Commit updates to _BZ2-1234_ branch
3. Create pull request (_BZ2-1234_ branch to _dev_ branch or _release_) with 'feat: Added XYZ integration BZ2-1234' title
4. Merge pull request using 'Squash and merge'
5. Delete _BZ2-1234_ branch

### Prerelease

Prerelease defines state when current code in _dev_ branch is ready for wider testing ie. all feature/fix branches were merged to _dev_ branch. There should be only one _release_ branch at a time

1. Create _release_ branch from _dev_ branch
2. Version and publish to npm
    1. (done by CI) If there is existing _release_ branch then check/ask Project Manager whether current features in _dev_ branch can be included in prerelease and follow:
    - Create pull request (_dev_ branch to _release_ branch), use 'Prerelease' as title and 'prerelease' label
    - Check result from SonarCloud integration (fix bugs / code smells, remove duplications)
    - Check PR commit message (correct commit messages, remove duplications, add release notes)
    - Merge pull request using 'Merge pull request'
    - Pull _release_ branch to LOCAL and update `yarn.lock` file

    ```bash
    git checkout dev
    git branch -d release
    git pull
    git checkout release
    git add yarn.lock && git commit -m "chore: updated yarn.lock after prerelease" -n && git push origin release
    ```

    2. (done by developer) On your LOCAL run following

    ```bash
    git checkout dev
    git branch -d release
    git pull
    git checkout release
    yarn prerelease:version
    yarn setup
    git add yarn.lock && git commit -m "chore: updated yarn.lock after prerelease" -n && git push origin release
    yarn prerelease:publish
    ```

#### Example

Starting version is 0.1.1

1. Create _release_ branch from _dev_ (on Code tab, click on branch list and type _release_. Click 'Create branch: release from dev') OR create pull request (_dev_ to _master_) with 'Prerelease' title and 'prerelease' label then merge using 'Merge pull request'

This will create 0.2.0-alpha.0 version. Any bug fixes for release (branch should be created from _release_ branch) will create incremental alpha versions e.g. 0.2.0-alpha.1, 0.2.0-alpha.2 etc.

### Release

Release defines state when current code in _release_ branch has been successfully tested and approved

1. Create pull request (_release_ branch to _master_ branch), use 'Release' as title and 'release' label
2. Merge pull request using 'Merge pull request'
3. Delete _release_ branch
4. Version and publish to npm
    1. (done by CI) After versioning Pull _master_ branch to LOCAL and update `yarn.lock` file

    ```bash
    git checkout dev
    git branch -d master
    git pull
    git checkout master
    git add yarn.lock && git commit -m "chore: updated yarn.lock after release" -n && git push origin master
    ```

    2. (done by developer) On your LOCAL run following

    ```bash
    git checkout dev
    git branch -d master
    git pull
    git checkout master
    yarn release:version
    yarn setup
    git add yarn.lock && git commit -m "chore: updated yarn.lock after release" -n && git push origin master
    yarn release:publish
    ```

5. Merge _master_ branch to _dev_ branch using rebase (note: in future we can try to automate this in GitHub Actions)

#### Example

Starting version is 0.2.0-alpha.2

 1. Create pull request (_release_ to _master_ branch) with 'Release' title and 'release' label
 2. Merge pull request

This will create 0.2.0 version.
