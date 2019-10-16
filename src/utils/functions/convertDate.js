// CACULATE DIFFERENT NUMBER OF DAYS BETWEEN TODAY DATE AND THE PRODUCT DATE
  function date_diff_indays(date1, date2) {
   const dt1 = new Date(date1);
   const dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
// CONDITIONAL RENDERING OF DATE
export function convertDate(date) {
    const diffInDays = date_diff_indays(date , new Date())
    const d = new Date(date)
    if(diffInDays === 0) {
        return `Today`
    } else if (diffInDays < 7 && diffInDays > 1) {
        return `${diffInDays} days ago`
    } else {
        return d.toLocaleDateString()
    }
}