/** Libraries */
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

/** Material UI - Icons */
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

/** Material UI - Custom components */
const FooterStiled = styled("footer")(({ theme }) => ({
  width: "100%",
  backgroundColor: "#26272b",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "45px 0 20px",
  fontSize: "15px",
  lineHeight: "24px",
  color: "#737373",
  overflowX: "hidden",
  hr: {
    borderTopColor: "#bbb",
    opacity: "0.5",
  },
  a: {
    color: "#737373",
    textDecoration: "none",
  },
  li: {
    listStyle: "none",
  },
}));

const SectionsContainer = styled("div")(({ theme }) => ({
  width: "85%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("lg")]: {
    flexWrap: "no-wrap",
  },
}));

const MainSection = styled("div")(({ theme }) => ({
  minHeight: "190px",
  display: "flex",
  alignItems: "start",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "85%",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "45%",
  },
}));

const SecondarySection = styled("div")(({ theme }) => ({
  minHeight: "190px",
  display: "flex",
  alignItems: "start",
  justifyContent: "flex-start",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "42.5%",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "42.5%",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "20%",
  },
}));

const Font = styled("h6")(({ theme }) => ({
  color: "#fff",
  fontSize: "16px",
  textTransform: "uppercase",
  marginTop: "5px",
  marginBottom: "2.5px",
  letterSpacing: "2px",
}));

const Paragraph = styled("p")(({ theme }) => ({
  fontSize: "15px",
  lineHeight: "24px",
  color: "#737373",
}));

const Divisor = styled("hr")(({ theme }) => ({
  width: "85%",
  marginTop: "1vh",
  marginBottom: "2.5vh",
}));

const LastSectionContainer = styled("div")(({ theme }) => ({
  width: "85%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    height: "20vh",
    justifyContent: "center",
    flexDirection: "column-reverse",
    flexWrap: "wrap",
  },
}));

const IconstContainer = styled("div")(({ theme }) => ({
  width: "25%",
  display: "flex",
  justifyContent: "flex-end",
  a: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#33353d",
    color: "#818a91",
    fontSize: "16px",
    lineHeight: "44px",
    width: "44px",
    height: "44px",
    textAlign: "center",
    marginRight: "8px",
    borderRadius: "100%",
    webkitTransition: "all 0.2s linear",
    OTransition: "all 0.2s linear",
    transition: "all 0.2s linear",
    ":hover": {
      color: "#fff",
      backgroundColor: "#29aafe",
    },
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    li: {
      marginLeft: "10px",
    },
  },
  [theme.breakpoints.down("md")]: {
    width: "85%",
    height: "10vh",
    justifyContent: "center",
    marginBottom: "5px",
  },
}));

export const Footer = () => {
  return (
    <FooterStiled>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SectionsContainer>
          <MainSection>
            <Font>About us</Font>
            <Paragraph>
              We are an <i>innovative</i> company which seeks to improve
              the user experience in all aspects while providing quality
              products imported mainly from China, Singapore, Taiwan, the
              United States and Vietnam. We have a catalog of more than 16,000
              products and we work with more than 360 brands with international
              recognition.
            </Paragraph>
          </MainSection>

          <SecondarySection>
            <Font>Brands</Font>
            <ul>
              <li>
                <Paragraph>Apple</Paragraph>
              </li>
              <li>
                <Paragraph>Sara</Paragraph>
              </li>
              <li>
                <Paragraph>Victoria Secret</Paragraph>
              </li>
              <li>
                <Paragraph>Rolls Royce</Paragraph>
              </li>
              <li>
                <Paragraph>Rolex</Paragraph>
              </li>
              <li>
                <Paragraph>Nike</Paragraph>
              </li>
            </ul>
          </SecondarySection>

          <SecondarySection>
            <Font>Clients</Font>
            <ul className="footer-links">
              <li>
                <Paragraph>Government of Brazil</Paragraph>
              </li>
              <li>
                <Paragraph>Government of Argentina</Paragraph>
              </li>
              <li>
                <Paragraph>Carrefour</Paragraph>
              </li>
              <li>
                <Paragraph>Nini</Paragraph>
              </li>
              <li>
                <Paragraph>Vital</Paragraph>
              </li>
            </ul>
          </SecondarySection>
        </SectionsContainer>
      </Box>
      <Divisor />
      <LastSectionContainer>
        <Box>
          <Paragraph>
            Copyright &copy; 2022 All Rights Reserved by
            <a href="https://github.com/lucasgojeda" target="_blank"> lucasgojeda</a>
            .
          </Paragraph>
        </Box>

        <IconstContainer>
          <ul>
            <li>
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZcRPPtpQFjcGrXKdKwprKrkBrdhGDBlfRQCBKCScqLFxmXrtrXjwdnPclVLzSvqKgVpLq"
                target="_blank"
              >
                <EmailIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-ojeda-a03372225/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lucass_ojedaa/" target="_blank">
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=542213173888"
                target="_blank"
              >
                <WhatsAppIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/lucas.ojeda.10888"
                target="_blank"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </IconstContainer>
      </LastSectionContainer>
    </FooterStiled>
  );
};
