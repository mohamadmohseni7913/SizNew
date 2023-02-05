import Swal from "sweetalert2"
// General error
export const Error = (title, text) => {
    Swal.fire(
        {
            icon: 'error',
            title,
            text,
        }

    )
}
// error for the low data entry
export const ErrorLowData = (title, text,value) => {
    Swal.fire(
        {
            icon: 'error',
            title:"خطایی رخ داده است",
            text:`مقدار ${title} نمی تواند کمتر  از  ${value}  میلی متر باشد`,
        }

    )
}
// error for the much or too high  data entry
export const ErrorMuchData = (title, text,value) => {
    Swal.fire(
        {
            icon: 'error',
            title,
            text:`مقدار ${title} نمی تواند بیشتر  از  ${value}  میلی متر باشد`,        }

    )
}
// general success error

export const success = (title, text) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title,
        text,
        showConfirmButton: false,
        timer: 1500
    })
}
// warning error 
export const warning = (title,text) => {
    Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'Green',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
}