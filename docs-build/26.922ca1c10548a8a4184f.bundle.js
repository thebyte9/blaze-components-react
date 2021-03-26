(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2247:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),lib=__webpack_require__(486),Utils_lib=__webpack_require__(4),Utils_lib_default=__webpack_require__.n(Utils_lib),react_tiny_virtual_list_es=__webpack_require__(487);var src_TableBody=Utils_lib_default()(({allRows:allRows,checkboxes:checkboxes,identification:identification,selected:selected,handleSelected:handleSelected,columns:columns,placeholder:placeholder,utils:{uniqueId:uniqueId},bodyRef:bodyRef,overScanBuffer:overScanBuffer=20,onRenderItems:onRenderItems,scrollToIndex:scrollToIndex=0,onClickRow:onClickRow})=>react_default.a.createElement("div",{ref:bodyRef,className:"table-body"},bodyRef.current&&allRows.length&&react_default.a.createElement(react_tiny_virtual_list_es.a,{width:"100%",height:bodyRef.current.offsetHeight,itemCount:allRows.length,itemSize:62,scrollToIndex:scrollToIndex,overscanCount:overScanBuffer,onItemsRendered:onRenderItems,renderItem:({index:index,style:style})=>react_default.a.createElement("div",{onClick:()=>onClickRow({...allRows[index],index:index}),className:"table-row",key:uniqueId(allRows[index]),"data-testid":`tablerow-${index+1}`,style:style},checkboxes&&react_default.a.createElement("div",{className:"table-cell--checkbox"},react_default.a.createElement(lib.Checkboxes,{"test-id":`row-checkbox-${index+1}`,options:{checked:selected.includes(allRows[index][identification]),id:allRows[index][identification],value:allRows[index][identification]},onChange:({value:value})=>handleSelected(value,allRows[index][identification])})),columns.map(column=>react_default.a.createElement("div",{className:"table-cell",key:column},react_default.a.createElement("div",{className:"table-cell--content"},allRows[index][column]))))}),!allRows.length&&react_default.a.createElement("div",{className:"table-body-placeholder"},react_default.a.createElement("div",null,placeholder))));var TableHead_SortableCell=({onSort:onSort,orderBy:orderBy,column:column,columns:columns,appliedSort:appliedSort,labels:labels})=>{const formatColumns=columns.reduce((acc,item)=>({...acc,[item]:null}),{}),[tableColumns,setTableColumns]=Object(react.useState)(formatColumns),sort=col=>{if(!orderBy.includes(col))return;const resetTableColumns=Object.keys(tableColumns).reduce((acc,key)=>(acc[key]=null,acc),{}),sortDirection=(col=>null===tableColumns[col]?"asc":"asc"===tableColumns[col]?"desc":"asc")(column);setTableColumns({...resetTableColumns,[column]:sortDirection}),onSort({[column]:sortDirection})};return Object(react.useEffect)(()=>{if(appliedSort){const[[col,direction]]=appliedSort&&Object.entries(appliedSort);if(tableColumns[col]!==direction){const merged={...tableColumns,[col]:direction};setTableColumns(merged)}}},[appliedSort]),react_default.a.createElement("div",{className:"sortable"},react_default.a.createElement("span",{"data-testid":`sortby-${column}`,onClick:()=>sort(column),role:"button"},labels[column]),null!==tableColumns[column]&&react_default.a.createElement("i",{className:"material-icons"},"asc"===tableColumns[column]?"keyboard_arrow_up":"keyboard_arrow_down"))};var src_TableHead=Utils_lib_default()(({onSort:onSort,orderBy:orderBy,columns:columns,utils:{uniqueId:uniqueId},headRef:headRef,appliedSort:appliedSort,labels:labels})=>react_default.a.createElement("div",{className:"table-head",ref:headRef},react_default.a.createElement("div",{className:"table-cell--checkbox"}),columns.map(column=>react_default.a.createElement("div",{key:uniqueId(column),className:"table-cell"},react_default.a.createElement(TableHead_SortableCell,{appliedSort:appliedSort,onSort:onSort,orderBy:orderBy,column:column,columns:columns,labels:labels})))));const Table=({data:{columns:columns,rows:rows,identification:identification,orderBy:orderBy,appliedSort:appliedSort,labels:labels},onSelect:onSelect=(()=>({})),onSort:onSort=(()=>({})),onClickRow:onClickRow=(()=>({})),checkboxes:checkboxes,placeholder:placeholder,overScanBuffer:overScanBuffer,onRenderItems:onRenderItems,scrollToIndex:scrollToIndex})=>{const[selected,setSelected]=Object(react.useState)([]),[allRows,setAllRows]=Object(react.useState)(rows),[allColumns,setAllColumns]=Object(react.useState)(columns),headRef=Object(react.useRef)(null),bodyRef=Object(react.useRef)(null);Object(react.useEffect)(()=>{setAllRows(rows),setAllColumns(columns)},[rows,rows&&rows.length,columns,columns&&columns.length]),Object(react.useEffect)(()=>(bodyRef&&bodyRef.current&&bodyRef.current.firstElementChild&&allRows.length&&bodyRef.current.firstElementChild.addEventListener("scroll",event=>syncScroll(headRef.current,event)),headRef&&headRef.current&&headRef.current.firstElementChild&&headRef.current.addEventListener("scroll",event=>syncScroll(bodyRef.current.firstElementChild,event)),()=>{bodyRef&&bodyRef.current&&bodyRef.current.firstElementChild&&bodyRef.current.firstElementChild.removeEventListener("scroll",syncScroll),headRef.current&&headRef.current.removeEventListener("scroll",syncScroll)}),[bodyRef.current,headRef.current,allRows]);const syncScroll=(ref,event)=>{ref.scrollLeft=event.target.scrollLeft};return react_default.a.createElement("div",{className:"table-wrapper"},react_default.a.createElement(src_TableHead,{onSort:onSort,orderBy:orderBy,headRef:headRef,columns:allColumns,appliedSort:appliedSort,labels:labels}),react_default.a.createElement(src_TableBody,{scrollToIndex:scrollToIndex,onClickRow:onClickRow,bodyRef:bodyRef,allRows:allRows,checkboxes:checkboxes,identification:identification,selected:selected,handleSelected:([checked],value,multiselect=!1)=>{let checkedValue=[];checkedValue=checked&&!selected.includes(checked.value)?[...selected,checked.value]:selected.filter(currentValue=>currentValue!==value),multiselect&&(checkedValue=checked?[...checked.value]:[]),setSelected(checkedValue),onSelect(checkedValue)},columns:columns,placeholder:placeholder,overScanBuffer:overScanBuffer,onRenderItems:onRenderItems}))};Table.defaultProps={checkboxes:!1,data:{columns:[],identification:"",orderBy:[],rows:[],labels:{}},placeholder:"No records available"};__webpack_exports__.default=Table}}]);
//# sourceMappingURL=26.922ca1c10548a8a4184f.bundle.js.map