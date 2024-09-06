import IconPresent from "../IconPresent/IconPresent";
import Title from "../Title/Title";
import { Icon } from '@iconify/react';

const ArticleComponent = ({title, name, number, numbertwo }) => {
    return (
            <div className="article-component">
                <IconPresent className='icon-present' title={title}/>
                <Title className='article' name={name}/>
                <div>
                    <Icon icon="line-md:phone-call-loop" />
                    <p>{number}</p>
                    <Icon icon="logos:whatsapp-monochrome-icon" />
                    <p>{numbertwo}</p>
                </div>
            </div>
            )
}

export default ArticleComponent;