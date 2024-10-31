import Swal from "sweetalert2";
export default function Notification(icon, title, text) {
  return Swal.fire({
    icon,
    title,
    text,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
    confirmButtonColor: "#e67e22",
  });
}
