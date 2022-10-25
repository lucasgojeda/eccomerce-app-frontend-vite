import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = () => {
  return (
    <div className="container_Footer">
      <div className="container_Title">
        <h3>CONTACTO</h3>
      </div>
      <div className="container_socialmedias">
        <div
          className="items"
          onClick={() =>
            window.open("https://www.instagram.com/lucasgojeda/", "_blank")
          }
        >
          <InstagramIcon />

          <h3>Instagram</h3>
        </div>
        <div
          className="items"
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=542213173888",
              "_blank"
            )
          }
        >
          <WhatsAppIcon />

          <h3>whatsapp</h3>
        </div>
        <div 
        className="items"
        onClick={() =>
            window.open(
              "https://www.linkedin.com/in/lucas-ojeda-a03372225/",
              "_blank"
            )
          }
        >
          <LinkedInIcon />

          <h3>Linkedin</h3>
        </div>
        <div
          className="items"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZcRPPtpQFjcGrXKdKwprKrkBrdhGDBlfRQCBKCScqLFxmXrtrXjwdnPclVLzSvqKgVpLq",
              "_blank"
            )
          }
        >
          <EmailIcon />

          <h3>Gmail</h3>
        </div>
        <div
          className="items"
          onClick={() =>
            window.open("https://www.facebook.com/lucas.ojeda.10888", "_blank")
          }
        >
          <FacebookIcon />

          <h3>Facebook</h3>
        </div>
      </div>
      <div className="container_Copyright">
        <h3>
          2022 | Ningún derecho reservado, robe codigo de mi repo sin
          remordimientos.
        </h3>
      </div>
    </div>
  );
};
