import React, {useEffect} from 'react';

function CopyCode(props) {
    const {title} = props;
    const clearAll = () => {
        localStorage.clear();
    }

    return(
        <>
        <div className="container">
            <h2 className="title">{title}</h2>
            {parseJava(props)}
            <button onClick={clearAll}>clear saved text</button>
        </div>
        </>
    );
}

function parseJava(props) {
    const text = props.children.split("\n");    // Array
    const textElem = [];                        // Array of JSX elements
    const indentLevels = [];                    // Array of indent levels for overlay
    
    var indentLevel = 0;
    var k = 0;
    
    text.forEach(str => {
        if (str[str.length - 1] === "}") {
            indentLevel -= 2;
        }

        textElem.push(
                    <p className="code-line" key={k}> 
                        <span className="block" style={{"width" : indentLevel + "em"}}/>
                        {str}
                    </p>
                    )
        indentLevels.push(indentLevel)

        if (str[str.length - 1] === "{") {
            indentLevel += 2;
        }

        k++;
    });

    return(
        <div className="code-text-wrapper">
            <LineOverlay numLines={k} indentLevels={indentLevels} text={text}/>
            {textElem}
        </div>
    );
}

function LineOverlay(props) {
    const {numLines, indentLevels} = props;
    const spanElems = [];

    for (let i=0; i<numLines; i++) {
        let stored = localStorage.getItem("dataStorage-span-" + i)
        spanElems.push(
            <span className="overlay-line" key={i} id={"span-" + i} 
            contentEditable suppressContentEditableWarning={true}
            style={{"left" : indentLevels[i] + "em"}}>
                {stored ? stored : "\xa0"}
            </span>
        );
    } 

    useEffect(() => {
        const editables = document.querySelectorAll("[contenteditable]");
        editables.forEach(el => {
            el.addEventListener("blur", () => {
                localStorage.setItem("dataStorage-" + el.id, el.innerText);
            });
        })
    });

    return(
    <div className="overlay-wrapper" contentEditable={false}>
        {spanElems}
    </div>)
}

export default CopyCode;