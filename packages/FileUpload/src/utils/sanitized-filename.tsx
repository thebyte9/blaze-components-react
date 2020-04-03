const sanitizedFilename = (file: any) => file.name && file.name.replace(".", "");

export default sanitizedFilename;