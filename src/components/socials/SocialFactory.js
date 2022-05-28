import Github from  "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Medium from "../icons/Medium";
import Twitter from "../icons/Twitter";
import Telegram from "../icons/Telegram";
import Email from "../icons/Email";


export default function SocialFactory(props) {
    switch (props.name) {
        case 'telegram':
            return Telegram(props);
        case 'email':
            return Email(props);
        case 'medium':
            return Medium(props);
        case 'github':
            return Github(props);
        case 'linkedin':
            return Linkedin(props);
        case 'twitter':
            return Twitter(props);
    }
}