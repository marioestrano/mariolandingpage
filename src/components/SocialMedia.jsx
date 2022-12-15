import { BsTwitter, BsGithub, BsLinkedin , BsWhatsapp, BsFillTelephoneFill, BsFillEnvelopeFill} from 'react-icons/bs';
import ReactTooltip from "react-tooltip";

export const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/MarioEstrano" ><BsTwitter/></a>
     </div>
      <div>
        <a href="https://github.com/marioestrano" ><BsGithub/></a>
     </div>
      <div>
      <a href="https://www.linkedin.com/in/marioestrano/" ><BsLinkedin/></a>
     </div>
      <div>
      <a href="https://wa.me/+584126797885" ><BsWhatsapp/></a>
     </div>
      <div data-tip data-for="phoneTip">
      <a   ><BsFillTelephoneFill/></a>
     </div><ReactTooltip  wrapper='span' id='phoneTip' place='right' effect='solid' type='light' border={true} > +58-4121593673 </ReactTooltip>
      <div data-tip data-for="emailTip">
      <a  ><BsFillEnvelopeFill/></a>
     </div><ReactTooltip wrapper='span' id='emailTip' place='bottom' effect='solid' type='light' border={true}> marioestrano@gmail.com </ReactTooltip>
    </div>
  )
}


