const FormatDate = (dateISOString) => {
    const date = new Date(dateISOString);
    console.log(date)
    return date.toLocaleDateString();
}
export default FormatDate;