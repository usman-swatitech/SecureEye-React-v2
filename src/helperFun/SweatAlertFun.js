import Swal from 'sweetalert2';

const SweatAlert = (text) => {
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

export default SweatAlert;