## Description

FileUpload component provides a flexible interface for handling file uploads with support for drag-and-drop, file browsing, and file preview. It supports images, videos, and documents with customizable fields and metadata collection.

## Features

- Drag-and-drop file upload
- File type detection (images, videos, documents)
- Customizable preview rendering
- Custom fields for metadata collection
- File store/library selection
- Copy-to-all functionality for custom fields
- Full file lifecycle management (add, remove, modify)

## Usage

### Basic Usage

```tsx
import FileUpload from '@blaze-react/file-upload';

function MyComponent() {
  const [files, setFiles] = useState([]);

  const handleChange = (uploadedFiles) => {
    setFiles(uploadedFiles);
  };

  return (
    <FileUpload 
      onChange={handleChange}
      selectOptions={[['default', 'Default'], ['maps', 'Maps store']]}
    />
  );
}
```

### With Drag and Drop

```tsx
<FileUpload 
  onChange={handleChange}
  enableDragAndDrop={true}
  selectOptions={[['default', 'Default'], ['maps', 'Maps store']]}
  actionText="Drop files here or click to browse"
/>
```

### With Custom Preview

```tsx
<FileUpload 
  onChange={handleChange}
  customPreview={true}
  selectOptions={[['default', 'Default']]}
>
  {/* Custom preview content */}
</FileUpload>
```

### With Custom Fields

```tsx
const customFields = [
  {
    name: 'title',
    label: 'Title',
    component: Input,
    copyEnabled: true,
  },
  {
    name: 'description',
    label: 'Description',
    component: Textarea,
    isVisible: (context) => context.file.type === 'image',
  },
];

<FileUpload 
  onChange={handleChange}
  customFields={customFields}
  selectOptions={[['default', 'Default']]}
/>
```

## API

FileUpload accepts the following `props`:

| NAME | TYPE | DEFAULT | REQUIRED | DESCRIPTION |
| :--- | :--- | :--- | :--- | :--- |
| onChange | Function | - | Yes | Called when files change with the updated files array |
| selectOptions | Array | [] | Yes | Options for file store/library selection: `[['key', 'Label'], ...]` |
| enableDragAndDrop | Boolean | true | No | Enable drag-and-drop functionality |
| customPreview | Boolean | false | No | Hide default preview and use children for custom preview |
| actionText | String | "Add files" | No | Text displayed in the upload action button |
| handleDrop | Function | undefined | No | Optional callback when files are dropped |
| handleLibraryClick | Function | undefined | No | Optional callback when library button is clicked |
| storeKey | String | undefined | No | Default store/library key for all files |
| customFields | Array\<IFileUploadCustomField\> | undefined | No | Array of custom fields to collect metadata |
| children | ReactNode | undefined | No | Custom preview content (used when customPreview is true) |

### IFileUploadCustomField Interface

```typescript
interface IFileUploadCustomField {
  component: React.ComponentType<any>;
  name: string;
  label?: React.ReactNode;
  copyEnabled?: boolean;
  copyKey?: string;
  id?: string;
  isVisible?: (context: IFileUploadCustomFieldContext) => boolean;
  buildProps?: (context: IFileUploadCustomFieldContext) => Record<string, any>;
  props?: Record<string, any>;
}

interface IFileUploadCustomFieldContext {
  data: any | null;
  file: any;
  index: number;
  name: string;
  selectOptions: any[];
  storeKey: string;
}
```

### File Object Structure

Each file in the upload is structured as:

```typescript
{
  file: {
    id: string;
    name: string;
    type: 'image' | 'video' | 'doc';
    base64?: string; // Only for images
  };
  name: string; // Custom title/name
  data: Record<string, any>; // Custom field values
  storeKey: string; // Selected store/library
}
```
