(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{2200:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),v1=__webpack_require__(289),v1_default=__webpack_require__.n(v1),lib=__webpack_require__(24),lib_default=__webpack_require__.n(lib);var src_Actions=({handleBrowse:handleBrowse,handleLibraryClick:handleLibraryClick,handleChange:handleChange,selectFile:selectFile})=>react_default.a.createElement(react_default.a.Fragment,null,!handleLibraryClick&&react_default.a.createElement(lib_default.a,{onClick:handleBrowse},"Browse"),handleLibraryClick&&react_default.a.createElement(lib_default.a,{onClick:handleLibraryClick},"Add files"),react_default.a.createElement("input",{type:"file",onChange:handleChange,ref:selectFile,style:{display:"none"}}));const DATA_ATTRIBUTS={altText:"",caption:""},DATA_ATTRIBUTES_ALT_TEXT="altText",DATA_ATTRIBUTES_CAPTION="caption";var Input_lib=__webpack_require__(152),Input_lib_default=__webpack_require__.n(Input_lib);var src_DocumentIcon=()=>react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 8 8"},react_default.a.createElement("path",{d:"M0 0v8h7v-4h-4v-4h-3zm4 0v3h3l-3-3zm-3 2h1v1h-1v-1zm0 2h1v1h-1v-1zm0 2h4v1h-4v-1z"}));var src_FileList=({previewImages:previewImages,handleCancel:handleCancel,handleInputChange:handleInputChange})=>react_default.a.createElement(react_default.a.Fragment,null,previewImages.map(({file:file,name:name,data:data},index)=>{const sanitizedFileName=file.name&&file.name.replace(".","");return react_default.a.createElement(react.Fragment,{key:file.id},react_default.a.createElement("div",{className:"preview"},react_default.a.createElement("div",{className:`preview__file preview__file--${file.type}`},"image"===file.type?react_default.a.createElement("img",{src:file.base64}):react_default.a.createElement(src_DocumentIcon,null)),react_default.a.createElement("div",{className:"preview__details"},react_default.a.createElement("div",{className:"preview__filename"},file.name),react_default.a.createElement("div",{className:"preview__form"},"image"===file.type&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Input_lib_default.a,{label:"Image title",onChange:handleInputChange,value:name,id:`${index}-title-${sanitizedFileName}`,name:"name"}),react_default.a.createElement(Input_lib_default.a,{label:"Alternative text",onChange:handleInputChange,value:data.altText,id:`${index}-altText-${sanitizedFileName}`,name:`${DATA_ATTRIBUTES_ALT_TEXT}-${index}-${sanitizedFileName}`}),react_default.a.createElement(Input_lib_default.a,{label:"Image caption",onChange:handleInputChange,value:data.caption,id:`${index}-caption-${sanitizedFileName}`,name:`${DATA_ATTRIBUTES_CAPTION}-${index}-${sanitizedFileName}`})),react_default.a.createElement("i",{onClick:()=>handleCancel(file.id),className:"material-icons","aria-hidden":"true"},"delete_outline")))))}));var src_DraggableFileUpload=({handleCancel:handleCancel,area:area,customPreview:customPreview,previewImages:previewImages,handleInputChange:handleInputChange,children:children,...attrs})=>{const[imagesToPreview,setImagesToPreview]=Object(react.useState)(previewImages);return Object(react.useEffect)(()=>setImagesToPreview(previewImages),[previewImages]),react_default.a.createElement("div",Object.assign({ref:area,className:"upload"},attrs),react_default.a.createElement("div",{className:"upload__drag-drop"},react_default.a.createElement("div",{className:"upload__icon"},react_default.a.createElement("i",{className:"material-icons"},"arrow_upward")),react_default.a.createElement("p",null,"Drag & drop file to upload")),react_default.a.createElement("div",{className:"upload__browse"},react_default.a.createElement("div",{className:"upload__text"},"or"),children),!customPreview&&react_default.a.createElement(src_FileList,{previewImages:imagesToPreview,handleCancel:handleCancel,handleInputChange:handleInputChange}))},lodash_clonedeep=__webpack_require__(2225),lodash_clonedeep_default=__webpack_require__.n(lodash_clonedeep);const FileUpload=({children:children,onChange:onChange,handleDrop:handleDropProp,customPreview:customPreview,handleLibraryClick:handleLibraryClick,enableDragAndDrop:enableDragAndDrop,...attr})=>{const[previewImages,setPreviewImages]=Object(react.useState)([]),[filesToUpload,setFilesToUpload]=Object(react.useState)([]),area=Object(react.useRef)(null),selectFile=Object(react.useRef)(null),handleDragover=event=>{event.stopPropagation(),event.preventDefault()};Object(react.useEffect)(()=>{const handler=setTimeout(()=>{onChange(filesToUpload)},500);return()=>{clearTimeout(handler)}},[filesToUpload]),Object(react.useEffect)(()=>{const handleDrop=event=>{event.preventDefault(),event.stopPropagation();let{dataTransfer:{files:files={}}={}}=event;files=Object.values(files),processFiles(files),onChange(files)},{current:currentArea}=area;if(enableDragAndDrop)return currentArea.addEventListener("dragover",handleDragover),currentArea.addEventListener("drop",handleDrop),()=>{currentArea.removeEventListener("dragover",handleDragover),currentArea.removeEventListener("drop",handleDrop)}},[previewImages,filesToUpload]);const processFiles=async files=>{if(!files||!files.length)return;files=files.map(file=>{try{file.id=v1_default()()}catch(e){return file}return file});const previewFiles=await(files=>Promise.all(files.map(file=>new Promise((resolve,reject)=>{if(file.type&&file.type.includes("image")){const reader=new FileReader;reader.readAsDataURL(file),reader.onload=e=>resolve({data:{...DATA_ATTRIBUTS},file:{base64:e.target.result,id:file.id,name:file.name,type:"image"},name:""}),reader.onerror=()=>reject(new DOMException("Error parsing input file."))}else file.type&&file.type.includes("video")?resolve({file:{id:file.id,name:file.name,type:"video"},name:""}):resolve({file:{id:file.id,name:file.name,type:"doc"},name:""})}))))(files),formatFiles=files.map(file=>({data:{...DATA_ATTRIBUTS},file:file}));setFilesToUpload([...filesToUpload,...formatFiles]),setPreviewImages([...previewImages,...previewFiles]),handleDropProp&&handleDropProp({previewFiles:[...previewImages,...previewFiles]})},handleChange=event=>{event.preventDefault();let{target:{files:files={}}={}}=event;files=Object.values(files),processFiles(files),onChange(files)},handleBrowse=()=>{const{current:currentSelectFile}=selectFile;currentSelectFile.click()},handleCancel=idToRemove=>{const validFiles=files=>files.filter(({file:{id:id}})=>id!==idToRemove),fileToUploadUpdated=validFiles(filesToUpload),previewImagesUpdated=validFiles(previewImages);setFilesToUpload(fileToUploadUpdated),setPreviewImages(previewImagesUpdated),onChange(fileToUploadUpdated),handleDropProp&&handleDropProp({previewFiles:previewImagesUpdated})},handleInputChange=({event:event})=>{const{target:{id:id,name:name,value:value}}=event,filesToUploadCopy=lodash_clonedeep_default()(filesToUpload),previewImagesCopy=lodash_clonedeep_default()(previewImages),index=Number(id.split("-")[0]);if("name"!==name){const _name=name.split("-")[0];filesToUploadCopy[index].data[_name]=value,previewImagesCopy[index].data[_name]=value}else filesToUploadCopy[index][name]=value,previewImagesCopy[index][name]=value;setFilesToUpload(filesToUploadCopy),setPreviewImages(previewImagesCopy)};return react_default.a.createElement(react_default.a.Fragment,null,enableDragAndDrop?react_default.a.createElement(src_DraggableFileUpload,Object.assign({previewImages:previewImages,handleCancel:handleCancel,customPreview:customPreview,area:area,handleInputChange:handleInputChange},attr),react_default.a.createElement(src_Actions,{handleLibraryClick:handleLibraryClick,handleBrowse:handleBrowse,handleChange:handleChange,selectFile:selectFile})):react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(src_Actions,{handleLibraryClick:handleLibraryClick,handleBrowse:handleBrowse,handleChange:handleChange,selectFile:selectFile}),!customPreview&&react_default.a.createElement(src_FileList,{previewImages:previewImages,handleCancel:handleCancel,handleInputChange:handleInputChange})))};FileUpload.defaultProps={children:"No content",customPreview:!1,enableDragAndDrop:!0,handleDrop:()=>void 0,onChange:()=>void 0};__webpack_exports__.default=FileUpload}}]);
//# sourceMappingURL=18.e6a85119b79b2ff43a8c.bundle.js.map