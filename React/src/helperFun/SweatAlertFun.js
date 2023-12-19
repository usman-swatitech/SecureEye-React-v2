import Swal from 'sweetalert2';

const failSweatAlert = (text) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text
        // footer: '<a href="">Why do I have this issue?</a>'
    });
};

export const successSweatAlert = (text) => {
    Swal.fire({
        icon: "success",
        title: 'Success...',
        text: text,
        showConfirmButton: false,
        timer: 1500
      });
}

export default failSweatAlert;