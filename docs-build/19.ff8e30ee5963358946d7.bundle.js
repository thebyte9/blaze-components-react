(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{2289:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lodash_clonedeep=__webpack_require__(2421),lodash_clonedeep_default=__webpack_require__.n(lodash_clonedeep),react=__webpack_require__(0),react_default=__webpack_require__.n(react),v1=__webpack_require__(302),v1_default=__webpack_require__.n(v1),lib=__webpack_require__(21),lib_default=__webpack_require__.n(lib);var src_Actions=({handleBrowse:handleBrowse,handleLibraryClick:handleLibraryClick,handleChange:handleChange,selectFile:selectFile,actionText:actionText})=>react_default.a.createElement(react_default.a.Fragment,null,!handleLibraryClick&&react_default.a.createElement(lib_default.a,{onClick:handleBrowse},"Browse"),handleLibraryClick&&react_default.a.createElement(lib_default.a,{onClick:handleLibraryClick},actionText),react_default.a.createElement("input",{type:"file",onChange:handleChange,ref:selectFile,style:{display:"none"}}));const DATA_ATTRIBUTS={altText:"",caption:"",hrefUrl:""};var src_DocumentIcon=()=>react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 8 8"},react_default.a.createElement("path",{d:"M0 0v8h7v-4h-4v-4h-3zm4 0v3h3l-3-3zm-3 2h1v1h-1v-1zm0 2h1v1h-1v-1zm0 2h4v1h-4v-1z"})),Input_lib=__webpack_require__(66),Input_lib_default=__webpack_require__.n(Input_lib),Select_lib=__webpack_require__(447),Select_lib_default=__webpack_require__.n(Select_lib);var get_input_label=(input,type)=>{switch(type){case"image":return`image ${input}`;case"doc":return`document ${input}`;default:return`video ${input}`}};var sanitized_filename=file=>file.name&&file.name.replace(".","");const{ALT_TEXT:ALT_TEXT,CAPTION:CAPTION,HREF_URL:HREF_URL,TITLE:TITLE}={ALT_TEXT:"altText",CAPTION:"caption",TITLE:"title",HREF_URL:"hrefUrl"};var src_FileInputs=({data:data,file:file,handleInputChange:handleInputChange,handleSelectChange:handleSelectChange,index:index,name:name,selectOptions:selectOptions})=>react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input_lib_default.a,{label:get_input_label(TITLE,file.type),onChange:handleInputChange,value:name,id:`${index}-title-${sanitized_filename(file)}`,name:"name"}),react_default.a.createElement(Input_lib_default.a,{label:get_input_label(CAPTION,file.type),onChange:handleInputChange,value:data.caption,id:`${index}-caption-${sanitized_filename(file)}`,name:`${CAPTION}-${index}-${sanitized_filename(file)}`}),"image"===file.type&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input_lib_default.a,{label:"Alternative text",onChange:handleInputChange,value:data.altText,id:`${index}-altText-${sanitized_filename(file)}`,name:`${ALT_TEXT}-${index}-${sanitized_filename(file)}`}),react_default.a.createElement(Input_lib_default.a,{label:"Url",onChange:handleInputChange,value:data.urlRedirect,id:`${index}-hrefUrl-${sanitized_filename(file)}`,name:`${HREF_URL}-${index}-${sanitized_filename(file)}`}),react_default.a.createElement(Select_lib_default.a,{label:"Store type",options:selectOptions,onChange:event=>handleSelectChange(event,index)})));var src_FileList=({previewImages:previewImages,handleCancel:handleCancel,handleInputChange:handleInputChange,handleSelectChange:handleSelectChange,selectOptions:selectOptions})=>react_default.a.createElement(react_default.a.Fragment,null,previewImages.map(({file:file,name:name,data:data},index)=>{const fileInputsProps={data:data,file:file,handleInputChange:handleInputChange,handleSelectChange:handleSelectChange,index:index,name:name,selectOptions:selectOptions},isImage="image"===file.type;return react_default.a.createElement(react.Fragment,{key:file.id},react_default.a.createElement("div",{className:"preview"},react_default.a.createElement("div",{className:`preview__file preview__file--${file.type}`},isImage?react_default.a.createElement("img",{src:file.base64}):react_default.a.createElement(src_DocumentIcon,null)),react_default.a.createElement("div",{className:"preview__details"},react_default.a.createElement("div",{className:"preview__filename"},file.name),react_default.a.createElement("div",{className:"preview__form"},(isImage||"doc"===file.type)&&react_default.a.createElement(src_FileInputs,Object.assign({},fileInputsProps)),react_default.a.createElement("i",{onClick:()=>handleCancel(file.id),className:"material-icons","aria-hidden":"true"},"delete_outline")))))}));var src_DraggableFileUpload=({handleCancel:handleCancel,area:area,customPreview:customPreview,previewImages:previewImages,handleInputChange:handleInputChange,handleSelectChange:handleSelectChange,children:children,selectOptions:selectOptions,...attrs})=>{const[imagesToPreview,setImagesToPreview]=Object(react.useState)(previewImages);return Object(react.useEffect)(()=>setImagesToPreview(previewImages),[previewImages]),react_default.a.createElement("div",Object.assign({ref:area,className:"upload"},attrs),react_default.a.createElement("div",{className:"upload__drag-drop"},react_default.a.createElement("div",{className:"upload__icon"},react_default.a.createElement("i",{className:"material-icons"},"arrow_upward")),react_default.a.createElement("p",null,"Drag & drop file to upload")),react_default.a.createElement("div",{className:"upload__browse"},react_default.a.createElement("div",{className:"upload__text"},"or"),children),!customPreview&&react_default.a.createElement(src_FileList,{previewImages:imagesToPreview,handleCancel:handleCancel,handleInputChange:handleInputChange,handleSelectChange:handleSelectChange,selectOptions:selectOptions}))};const FileUpload=({children:children,onChange:onChange,handleDrop:handleDropProp,customPreview:customPreview,handleLibraryClick:handleLibraryClick,enableDragAndDrop:enableDragAndDrop,actionText:actionText,selectOptions:selectOptions,...attr})=>{const[previewImages,setPreviewImages]=Object(react.useState)([]),[filesToUpload,setFilesToUpload]=Object(react.useState)([]),area=Object(react.useRef)(null),selectFile=Object(react.useRef)(null),handleDragover=event=>{event.stopPropagation(),event.preventDefault()};Object(react.useEffect)(()=>{const handler=setTimeout(()=>{onChange(filesToUpload)},500);return()=>{clearTimeout(handler)}},[filesToUpload]),Object(react.useEffect)(()=>{const handleDrop=event=>{event.preventDefault(),event.stopPropagation();let{dataTransfer:{files:files={}}={}}=event;files=Object.values(files),processFiles(files),onChange(files)},{current:currentArea}=area;if(enableDragAndDrop)return currentArea.addEventListener("dragover",handleDragover),currentArea.addEventListener("drop",handleDrop),()=>{currentArea.removeEventListener("dragover",handleDragover),currentArea.removeEventListener("drop",handleDrop)}},[previewImages,filesToUpload]);const processFiles=async files=>{if(!files||!files.length)return;files=files.map(file=>{try{file.id=v1_default()()}catch(e){return file}return file});const previewFiles=await(files=>Promise.all(files.map(file=>new Promise((resolve,reject)=>{if(file.type&&file.type.includes("image")){const reader=new FileReader;reader.readAsDataURL(file),reader.onload=e=>resolve({data:{...DATA_ATTRIBUTS},file:{base64:e.target.result,id:file.id,name:file.name,type:"image"},name:""}),reader.onerror=()=>reject(new DOMException("Error parsing input file."))}else file.type&&file.type.includes("video")?resolve({file:{id:file.id,name:file.name,type:"video"},name:""}):resolve({data:{...DATA_ATTRIBUTS},file:{id:file.id,name:file.name,type:"doc"},name:""})}))))(files),formatFiles=files.map(file=>({data:{...DATA_ATTRIBUTS},file:file}));setFilesToUpload([...filesToUpload,...formatFiles]),setPreviewImages([...previewImages,...previewFiles]),handleDropProp&&handleDropProp({previewFiles:[...previewImages,...previewFiles]})},handleChange=event=>{event.preventDefault();let{target:{files:files={}}={}}=event;files=Object.values(files),processFiles(files),onChange(files)},handleBrowse=()=>{const{current:currentSelectFile}=selectFile;currentSelectFile.click()},handleCancel=idToRemove=>{const validFiles=files=>files.filter(({file:{id:id}})=>id!==idToRemove),fileToUploadUpdated=validFiles(filesToUpload),previewImagesUpdated=validFiles(previewImages);setFilesToUpload(fileToUploadUpdated),setPreviewImages(previewImagesUpdated),onChange(fileToUploadUpdated),handleDropProp&&handleDropProp({previewFiles:previewImagesUpdated})},handleInputChange=({event:event})=>{const{target:{id:id,name:name,value:value}}=event,filesToUploadCopy=lodash_clonedeep_default()(filesToUpload),previewImagesCopy=lodash_clonedeep_default()(previewImages),index=Number(id.split("-")[0]);if("name"!==name){const _name=name.split("-")[0];filesToUploadCopy[index].data[_name]=value,previewImagesCopy[index].data[_name]=value}else filesToUploadCopy[index][name]=value,previewImagesCopy[index][name]=value;setFilesToUpload(filesToUploadCopy),setPreviewImages(previewImagesCopy)},handleSelectChange=({event:event},index)=>{const{target:{value:value}}=event,filesToUploadCopy=lodash_clonedeep_default()(filesToUpload);filesToUploadCopy[index].storeKey=value,setFilesToUpload(filesToUploadCopy)};return react_default.a.createElement(react_default.a.Fragment,null,enableDragAndDrop?react_default.a.createElement(src_DraggableFileUpload,Object.assign({previewImages:previewImages,handleCancel:handleCancel,customPreview:customPreview,area:area,handleInputChange:handleInputChange,handleSelectChange:handleSelectChange,selectOptions:selectOptions},attr),react_default.a.createElement(src_Actions,{actionText:actionText,handleLibraryClick:handleLibraryClick,handleBrowse:handleBrowse,handleChange:handleChange,selectFile:selectFile})):react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(src_Actions,{actionText:actionText,handleLibraryClick:handleLibraryClick,handleBrowse:handleBrowse,handleChange:handleChange,selectFile:selectFile}),!customPreview&&react_default.a.createElement(src_FileList,{previewImages:previewImages,handleCancel:handleCancel,handleInputChange:handleInputChange,handleSelectChange:handleSelectChange,selectOptions:selectOptions})))};FileUpload.defaultProps={actionText:"Add Files",children:"No content",customPreview:!1,enableDragAndDrop:!0,handleDrop:()=>void 0,onChange:()=>void 0};__webpack_exports__.default=FileUpload}}]);
//# sourceMappingURL=19.ff8e30ee5963358946d7.bundle.js.map