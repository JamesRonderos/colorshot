import React, {useState} from 'react';
import CopytoClipboard from 'react-copy-to-clipboard'
import "./Colorbox.css";

function Colorbox(props) {
    const { name, background } = props
    const [copied, setCopied] = useState(false);

    function changeCopyState() {
        setCopied(true)
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <CopytoClipboard text={ background } onCopy={changeCopyState}>
            <div style={{ background }} className="ColorBox" >
                <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
                <div className="copy-msg" className={`copy-msg ${copied && "show"}`}>
                    <h1>Copied!</h1>
                    <p>{ background }</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{ name }</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className='see-more'>More</span>
            </div>
        </CopytoClipboard>
    );
}

export default Colorbox;
