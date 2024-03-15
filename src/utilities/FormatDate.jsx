const FormatDate = (dateISOString) => {
    const date = new Date(dateISOString);
    return date.toLocaleDateString();
}
export default FormatDate;

// not for server - for the user!!