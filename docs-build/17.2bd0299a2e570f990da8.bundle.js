(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{2453:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lib=__webpack_require__(9),lib_default=__webpack_require__.n(lib);class Chain{constructor(prev,next,callback){this.prev=prev,this.next=next,this.callback=callback}run(data){this.callback&&this.callback(data),this.next&&this.next.run(data)}}var eventBus_List=class List_List{constructor(){this.head=new Chain,this.tail=new Chain(this.head)}insert(callback){const link=new Chain(this.tail.prev,this.tail,callback);return link.prev&&link.next&&(link.prev.next=link,link.next.prev=link),link}};var eventBus_EventBus=class EventBus_EventBus{constructor(){this.events={}}$emit(name,data){this.events[name]&&this.events[name].head.run(data)}$on(name,callback){(this.events[name]||(this.events[name]=new eventBus_List)).insert(callback)}};var eventBus=(new class eventBus_EventBusFactory{newEventBus(){return new eventBus_EventBus}}).newEventBus(),Draft=__webpack_require__(128),draft_js_plugins_editor_lib=__webpack_require__(2471),draft_js_plugins_editor_lib_default=__webpack_require__.n(draft_js_plugins_editor_lib),react=__webpack_require__(0),react_default=__webpack_require__.n(react);const MARGINS=["marginTop","marginLeft","marginRight","marginBottom"];var draft_js_alignment_plugin_lib=__webpack_require__(2495),draft_js_alignment_plugin_lib_default=__webpack_require__.n(draft_js_alignment_plugin_lib),draft_js_buttons_lib=(__webpack_require__(2516),__webpack_require__(2469)),draft_js_drag_n_drop_plugin_lib=__webpack_require__(2518),draft_js_drag_n_drop_plugin_lib_default=__webpack_require__.n(draft_js_drag_n_drop_plugin_lib),draft_js_focus_plugin_lib=__webpack_require__(2523),draft_js_focus_plugin_lib_default=__webpack_require__.n(draft_js_focus_plugin_lib),draft_js_image_plugin_lib=__webpack_require__(2532),draft_js_image_plugin_lib_default=__webpack_require__.n(draft_js_image_plugin_lib),draft_js_inline_toolbar_plugin_lib=__webpack_require__(2535),draft_js_inline_toolbar_plugin_lib_default=__webpack_require__.n(draft_js_inline_toolbar_plugin_lib),draft_js_linkify_plugin_lib=__webpack_require__(2539),draft_js_linkify_plugin_lib_default=__webpack_require__.n(draft_js_linkify_plugin_lib),draft_js_resizeable_plugin_lib=__webpack_require__(2547),draft_js_resizeable_plugin_lib_default=__webpack_require__.n(draft_js_resizeable_plugin_lib),Button_lib=__webpack_require__(26),Button_lib_default=__webpack_require__.n(Button_lib);var InlineToolbar=(components,icon)=>props=>{const formatedComponents=Object.keys(components).map(key=>[key,components[key]]);return react_default.a.createElement("div",{onMouseDown:event=>event.preventDefault(),className:"headlineButtonWrapper"},react_default.a.createElement(Button_lib_default.a,{onClick:()=>props.onOverrideContent((components=>props=>{Object(react.useEffect)(()=>(window.addEventListener("click",onWindowClick),()=>window.removeEventListener("click",onWindowClick)),[]);const onWindowClick=()=>props.onOverrideContent(void 0);return react_default.a.createElement("div",{onClick:onWindowClick},components.map(([componentName,DraftButton])=>react_default.a.createElement(DraftButton,Object.assign({key:componentName},props))))})(formatedComponents)),className:"headlineButton"},icon))};__webpack_require__(2549),__webpack_require__(2551),__webpack_require__(2553),__webpack_require__(2555);const focusPlugin=draft_js_focus_plugin_lib_default()(),blockDndPlugin=draft_js_drag_n_drop_plugin_lib_default()(),linkifyPlugin=draft_js_linkify_plugin_lib_default()(),resizeablePlugin=draft_js_resizeable_plugin_lib_default()(),alignmentPlugin=draft_js_alignment_plugin_lib_default()(),inlineToolbarPlugin=draft_js_inline_toolbar_plugin_lib_default()(),{InlineToolbar:DraftPlugins_InlineToolbar}=inlineToolbarPlugin,{AlignmentTool:AlignmentTool}=alignmentPlugin,plugins=[focusPlugin,inlineToolbarPlugin,blockDndPlugin,draft_js_image_plugin_lib_default()({decorator:Object(draft_js_plugins_editor_lib.composeDecorators)(blockDndPlugin.decorator,alignmentPlugin.decorator,resizeablePlugin.decorator,focusPlugin.decorator)}),linkifyPlugin,alignmentPlugin,resizeablePlugin],HeadlinesButton=InlineToolbar({HeadlineOneButton:draft_js_buttons_lib.HeadlineOneButton,HeadlineTwoButton:draft_js_buttons_lib.HeadlineTwoButton,HeadlineThreeButton:draft_js_buttons_lib.HeadlineThreeButton},react_default.a.createElement("b",null,"H")),BlockControlsButton=InlineToolbar({OrderedListButton:draft_js_buttons_lib.OrderedListButton,UnorderedListButton:draft_js_buttons_lib.UnorderedListButton,BlockquoteButton:draft_js_buttons_lib.BlockquoteButton},react_default.a.createElement("i",{className:"material-icons"},"list")),InlineControlsButton=InlineToolbar({BoldButton:draft_js_buttons_lib.BoldButton,ItalicButton:draft_js_buttons_lib.ItalicButton,UnderlineButton:draft_js_buttons_lib.UnderlineButton},react_default.a.createElement("i",{className:"material-icons"},"text_format")),DraftPlugins=()=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(AlignmentTool,null),react_default.a.createElement(DraftPlugins_InlineToolbar,null,props=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(InlineControlsButton,Object.assign({},props)),react_default.a.createElement(HeadlinesButton,Object.assign({},props)),react_default.a.createElement(BlockControlsButton,Object.assign({},props)))));var CustomPlugins_StyleButton=lib_default()(({onToggle:onToggle,style:style,active:active,label:label,utils:{classNames:classNames},"data-cy":datacy})=>{const styleButtonClassName=classNames("custom-DraftEditor-styleButton",{"custom-DraftEditor-activeButton":active});return react_default.a.createElement("span",{className:styleButtonClassName,onMouseDown:event=>{event.preventDefault(),onToggle&&onToggle(style)},"data-cy":datacy||`styleButton-${label}`},label)});var CustomPlugins_BlockControls=({editorState:editorState,onToggle:onToggle})=>{const selection=editorState.getSelection(),blockType=editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();return react_default.a.createElement("div",{className:"custom-DraftEditor-controls"},[{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Blockquote",style:"blockquote"},{label:"Code Block",style:"code-block"},{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"}].map(({label:label,style:style})=>react_default.a.createElement(CustomPlugins_StyleButton,{key:label,style:style,label:label,onToggle:onToggle,active:style===blockType})))};var CustomPlugins_HTMLEditor=({onToggle:onToggle})=>react_default.a.createElement(CustomPlugins_StyleButton,{label:react_default.a.createElement("i",{className:"material-icons"},"code"),onToggle:onToggle,"data-cy":"styleButton-HTMLEditor"}),Input_lib=__webpack_require__(199),Input_lib_default=__webpack_require__.n(Input_lib),Modal_lib=__webpack_require__(397),Modal_lib_default=__webpack_require__.n(Modal_lib);const AddImageAttributes=({imageAttributesData:imageAttributesData,saveImageAttributes:saveImageAttributes,closeImageAttributesModal:closeImageAttributesModal})=>{const[imageAttributes,setImageAttributes]=Object(react.useState)(imageAttributesData),[newImageAttributes,setNewImageAttributes]=Object(react.useState)(imageAttributesData.images.find(({url:url})=>url===imageAttributes.focusedImageURL)||{});Object(react.useEffect)(()=>{setNewImageAttributes(imageAttributesData.images.find(({url:url})=>url===imageAttributesData.focusedImageURL)||{}),setImageAttributes(imageAttributesData)},[imageAttributesData]);const alertActions=[{callback:()=>{const removeDuplicatesImages=imageAttributes.images.filter(({url:url})=>url!==imageAttributes.focusedImageURL);saveImageAttributes({...imageAttributes,images:[...removeDuplicatesImages,newImageAttributes]}),closeImageAttributesModal()},modifiers:["small"],textButton:"Save"}];return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Modal_lib_default.a,{actions:alertActions,onClose:closeImageAttributesModal,isAlert:!0},[{name:"modifier",type:"string",label:"Modifier"},{name:"altText",type:"string",label:"Alt text"},{name:"caption",type:"string",label:"Caption"},{name:"marginTop",type:"number",label:"Margin top (px)"},{name:"marginLeft",type:"number",label:"Margin left (px)"},{name:"marginRight",type:"number",label:"Margin right (px)"},{name:"marginBottom",type:"number",label:"Margin bottom (px)"}].map(option=>react_default.a.createElement(Input_lib_default.a,{label:option.label,onChange:event=>(({value:value},name)=>{setNewImageAttributes({...newImageAttributes,url:imageAttributes.focusedImageURL,[name]:value})})(event,option.name),modifier:"full-width",value:newImageAttributes[option.name],key:option.name,type:option.type}))))};AddImageAttributes.defaultProps={error:!1,name:"editor"};var ImageControl_AddImageAttributes=AddImageAttributes;var ImageControl_ImageControl=({editorState:editorState,selectedImages:selectedImages,onToggle:onToggle,handleLibraryClick:handleLibraryClick})=>{Object(react.useEffect)(()=>{let latestEditorState=editorState;selectedImages.forEach(img=>{const{src:src}=img;latestEditorState=insertImage(src,latestEditorState)})},[selectedImages]);const insertImage=(src,latestEditorState)=>{const contentStateWithEntity=latestEditorState.getCurrentContent().createEntity("IMAGE","IMMUTABLE",{src:src}),entityKey=contentStateWithEntity.getLastCreatedEntityKey(),newEditorState=Draft.EditorState.set(latestEditorState,{currentContent:contentStateWithEntity});return onToggle(newEditorState,entityKey)};return react_default.a.createElement(CustomPlugins_StyleButton,{label:react_default.a.createElement("i",{className:"material-icons"},"add_photo_alternate"),onToggle:handleLibraryClick,"data-cy":"styleButton-imageControl"})};var CustomPlugins_InlineControls=({editorState:editorState,onToggle:onToggle})=>{const currentStyle=editorState.getCurrentInlineStyle();return react_default.a.createElement("div",{className:"custom-DraftEditor-controls"},[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}].map(({label:label,style:style})=>react_default.a.createElement(CustomPlugins_StyleButton,{key:label,style:style,label:label,onToggle:onToggle,active:currentStyle.has(style)})))};var LinkControl_Anchor=({contentState:contentState,entityKey:entityKey,children:children})=>{const{url:url}=contentState.getEntity(entityKey).getData();return react_default.a.createElement("a",{rel:"nofollow noreferrer",href:url,target:"_blank",onClick:()=>window.open(url,"_blank")},children)};const LinkControl=({editorState:editorState,onToggle:onToggle,unSelectedText:unSelectedText})=>{const[modalStatus,setModalStatus]=Object(react.useState)(!1),[url,setUrl]=Object(react.useState)(""),[selectedContent,setSelectedContent]=Object(react.useState)(),[isEditMode,setIsEditMode]=Object(react.useState)(!1),alertActions=[{callback:()=>{const contentState=editorState.getCurrentContent();if(!selectedContent)return;let entityKey=null,newEditorState=editorState;if(url){const formatedURL=(str=>!str.includes(".")||str.match(/^http[s]?:\/\//)||str.includes("mailto:")||str.includes("tel:")?str:`http://${str}`)(url),contentStateWithEntity=contentState.createEntity("LINK","IMMUTABLE",{url:formatedURL});entityKey=contentStateWithEntity.getLastCreatedEntityKey(),newEditorState=Draft.EditorState.set(editorState,{currentContent:contentStateWithEntity})}onToggle(newEditorState,selectedContent,entityKey),closeModal()},modifiers:["small",`${selectedContent?"":"disabled"}`],textButton:"Save"}],closeModal=()=>{setUrl(""),setSelectedContent(void 0),setIsEditMode(!1),setModalStatus(!1)};return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(CustomPlugins_StyleButton,{label:react_default.a.createElement("i",{className:"material-icons"},"insert_link"),onToggle:()=>{setModalStatus(!0),(()=>{const selection=editorState.getSelection(),contentState=editorState.getCurrentContent();if(!selection.isCollapsed()&&selection.getStartOffset()!==selection.getEndOffset()){const linkKey=contentState.getBlockForKey(selection.getStartKey()).getEntityAt(selection.getStartOffset());if(linkKey){const linkInstance=contentState.getEntity(linkKey),{url:oldUrl}=linkInstance.getData();setUrl(oldUrl),setIsEditMode(!0)}setSelectedContent(selection)}})()},active:modalStatus,"data-cy":"styleButton-linkControl"}),modalStatus&&react_default.a.createElement(Modal_lib_default.a,{actions:alertActions,onClose:closeModal,isAlert:!0},selectedContent?react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input_lib_default.a,{placeholder:"Insert URL",onChange:({value:value})=>setUrl(value),modifier:"full-width",value:url}),isEditMode&&react_default.a.createElement("span",null,"Note: keep it empty if you want to remove the link.")):react_default.a.createElement("p",null,unSelectedText)))};LinkControl.defaultProps={error:!1,name:"editor"};var LinkControl_LinkControl=LinkControl;const CustomDraftPlugins=({editorState:editorState,selectedImages:selectedImages,handleLibraryClick:handleLibraryClick,unSelectedText:unSelectedText,onEditorChange:onEditorChange,toggleDraftEditor:toggleDraftEditor})=>{return react_default.a.createElement("section",{className:"custom-DraftEditor-utils"},react_default.a.createElement(CustomPlugins_BlockControls,{editorState:editorState,onToggle:blockType=>onEditorChange(Draft.RichUtils.toggleBlockType(editorState,blockType))}),react_default.a.createElement("div",{className:"custom-DraftEditor-inlineControls"},react_default.a.createElement(CustomPlugins_InlineControls,{editorState:editorState,onToggle:inlineStyle=>onEditorChange(Draft.RichUtils.toggleInlineStyle(editorState,inlineStyle))}),react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(ImageControl_ImageControl,{editorState:editorState,onToggle:(newEditorState,entityKey)=>{const stateWithImageInserted=Draft.AtomicBlockUtils.insertAtomicBlock(newEditorState,entityKey," ");return onEditorChange(stateWithImageInserted),stateWithImageInserted},selectedImages:selectedImages,handleLibraryClick:handleLibraryClick}),react_default.a.createElement(LinkControl_LinkControl,{editorState:editorState,onToggle:(newEditorState,selection,entityKey)=>{onEditorChange(Draft.RichUtils.toggleLink(newEditorState,selection,entityKey))},unSelectedText:unSelectedText}),react_default.a.createElement(CustomPlugins_HTMLEditor,{onToggle:toggleDraftEditor}))))},linkDecorator={component:LinkControl_Anchor,strategy:(contentBlock,callback,availableContentState)=>{contentBlock.findEntityRanges(character=>{const entityKey=character.getEntity();return!(!entityKey||"LINK"!==availableContentState.getEntity(entityKey).getType())},callback)}};var CustomPlugins_decorator=new Draft.CompositeDecorator([linkDecorator]),react_dom=__webpack_require__(68),react_dom_default=__webpack_require__.n(react_dom);const findElements=(node,element)=>{if(!node)return[];const editor=react_dom_default.a.findDOMNode(node);return editor instanceof HTMLElement?Array.from(editor.querySelectorAll(element)):[]},updateElementStyles=(element,styles)=>{Object.entries(styles).forEach(([key,value])=>{MARGINS.includes(key)&&"auto"!==element.style[key]&&(element.style[key]=`${value}px`)})},findImageBySrc=(images,src,key="src")=>images.find(({[key]:imageSrc})=>imageSrc===src),findImageAndUpdateStyles=(element,imageAttributes)=>{const images=findElements(element,"img");if(imageAttributes instanceof Array)return void imageAttributes.forEach(imgData=>{const imageToUpdate=findImageBySrc(images,imgData.url);imageToUpdate&&updateElementStyles(imageToUpdate,imgData)});const selectedImage=findImageBySrc(images,imageAttributes.focusedImageURL),selectImageAttributes=findImageBySrc(imageAttributes.images,imageAttributes.focusedImageURL,"url");selectImageAttributes&&updateElementStyles(selectedImage,selectImageAttributes)},blockRenderer=contentBlock=>{return"atomic"===contentBlock.getType()?{component:Component,editable:!0,props:{}}:""},Component=props=>react_default.a.createElement("pre",null,react_default.a.createElement("code",null,react_default.a.createElement(Draft.EditorBlock,Object.assign({},props)))),DraftEditor=({utils:{classNames:classNames,ErrorMessage:ErrorMessage},onChange:onChange,name:name,value:value,error:error,validationMessage:validationMessage,unSelectedText:unSelectedText,selectedImages:selectedImages,handleLibraryClick:handleLibraryClick,...attrs})=>{const[editorState,setEditorState]=Object(react.useState)(Draft.EditorState.createWithContent(Draft.EditorState.createEmpty().getCurrentContent(),CustomPlugins_decorator)),[editorHeight,setEditorHeight]=Object(react.useState)({}),[imageAttributesStatus,setImageAttributesStatus]=Object(react.useState)(!1),[imageAttributesData,setImageAttributesData]=Object(react.useState)({focusedImageURL:null,images:[]}),inputEl=Object(react.useRef)(null),globalRef=Object(react.useRef)(null);Object(react.useEffect)(()=>{let initialEditorState=Draft.EditorState.createEmpty().getCurrentContent(),images=[];if(value){const parsedValue=JSON.parse(value);images=parsedValue.imageAttributes instanceof Array?parsedValue.imageAttributes:[],setImageAttributesData({focusedImageURL:null,images:images}),initialEditorState=Object(Draft.convertFromRaw)(parsedValue)}const state=Draft.EditorState.createWithContent(initialEditorState,CustomPlugins_decorator);setEditorState(state),onEditorChange(state,images),calculateEditorHeight(500),(element=>{const[alignmentToolContainer]=findElements(element,".draftJsEmojiPlugin__alignmentTool__2mkQr");alignmentToolContainer&&(window.showModal=()=>{const[focusedImage]=findElements(element,".draftJsFocusPlugin__focused__3Mksn");eventBus.$emit("editImageAttributes",focusedImage.src)},alignmentToolContainer.insertAdjacentHTML("beforeend",'<div class="draftJsEmojiPlugin__buttonWrapper__1Dmqh" onclick="showModal()">\n        <i class="material-icons">\n          perm_data_setting\n        </i>\n      </div>'))})(globalRef.current),handleEditImageEvent(images)},[]);Object(react.useEffect)(()=>{calculateEditorHeight()},[editorState]);const handleEditImageEvent=images=>{eventBus.$on("editImageAttributes",focusedImageURL=>{setImageAttributesStatus(!0),setImageAttributesData({focusedImageURL:focusedImageURL,images:images})})},calculateEditorHeight=(time=0)=>{setTimeout(()=>{setEditorHeight((element=>{let editorHeight={height:"auto"};try{const editor=react_dom_default.a.findDOMNode(element);if(editor instanceof HTMLElement){const totalImagesSize=findElements(element,"img").reduce((accumulator,image)=>{const{float:float,marginTop:marginTop,marginBottom:marginBottom}=getComputedStyle(image),total=accumulator+parseInt(marginTop)+parseInt(marginBottom);return"left"===float||"right"===float?total+image.clientHeight+50:total},0);totalImagesSize&&(editorHeight={height:`${totalImagesSize+editor.clientHeight}px`})}}catch(error){console.log(error)}return editorHeight})(inputEl.current)),findImageAndUpdateStyles(inputEl.current,imageAttributesData.images)},time)},onEditorChange=(newEditorState,imagesAttr)=>{const currentContent=newEditorState.getCurrentContent(),rawValue=Object(Draft.convertToRaw)(currentContent),blocks=rawValue.blocks.map(block=>("atomic"===block.type&&block.text.trim()&&(block.text=block.text.replace(/\s+/g," ")),block));rawValue.blocks=blocks;const rawValueString=JSON.stringify({...rawValue,imageAttributes:imagesAttr instanceof Array?imagesAttr:imageAttributesData.images}),eventFormat={event:{target:{name:name,value:rawValueString}}};onChange&&(setEditorState(newEditorState),onChange(eventFormat))},contentState=editorState.getCurrentContent(),isUnstyled="unstyled"!==contentState.getBlockMap().first().getType(),hasTextAndUnstyled=!contentState.hasText()&&isUnstyled,editorClassName=classNames("custom-DraftEditor-editor",{"custom-DraftEditor-hidePlaceholder":hasTextAndUnstyled});return react_default.a.createElement("div",{className:"custom-DraftEditor-root",ref:globalRef},react_default.a.createElement(CustomDraftPlugins,{editorState:editorState,selectedImages:selectedImages,handleLibraryClick:handleLibraryClick,unSelectedText:unSelectedText,onEditorChange:onEditorChange,toggleDraftEditor:()=>{const contentStateWithEntity=editorState.getCurrentContent().createEntity("CODE","MUTABLE"),entityKey=contentStateWithEntity.getLastCreatedEntityKey(),newEditorState=Draft.EditorState.set(editorState,{currentContent:contentStateWithEntity});setEditorState(Draft.AtomicBlockUtils.insertAtomicBlock(newEditorState,entityKey," "))}}),imageAttributesStatus&&react_default.a.createElement(ImageControl_AddImageAttributes,{imageAttributesData:imageAttributesData,saveImageAttributes:imageAttributes=>{findImageAndUpdateStyles(globalRef.current,imageAttributes),setImageAttributesData(imageAttributes),onEditorChange(editorState,imageAttributes.images),handleEditImageEvent(imageAttributes.images)},closeImageAttributesModal:()=>setImageAttributesStatus(!1)}),react_default.a.createElement("div",{className:editorClassName,style:editorHeight},react_default.a.createElement(draft_js_plugins_editor_lib_default.a,Object.assign({ref:inputEl,handleKeyCommand:command=>{const newState=Draft.RichUtils.handleKeyCommand(editorState,command);return newState&&"backspace"!==command?(onEditorChange(newState),"handled"):"not-handled"},blockStyleFn:block=>{const isBlockquote="blockquote"===block.getType();return classNames({"custom-DraftEditor-blockquote":isBlockquote})},editorState:editorState,onChange:onEditorChange,blockRendererFn:blockRenderer,plugins:plugins},attrs)),react_default.a.createElement(DraftPlugins,null)),error&&react_default.a.createElement(ErrorMessage,{message:validationMessage}))};DraftEditor.defaultProps={error:!1,name:"editor",selectedImages:[],unSelectedText:"Make sure you have a text selected",validationMessage:"This field is required"};__webpack_exports__.default=lib_default()(DraftEditor)}}]);
//# sourceMappingURL=17.2bd0299a2e570f990da8.bundle.js.map