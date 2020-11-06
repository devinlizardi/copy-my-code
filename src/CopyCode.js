import React from 'react';

function CopyCode(props) {
    return(
        <>
        <div className="container">
            <h2 className="title">{props.title}</h2>
            {parseJava(props)}
        </div>
        </>
    );
}

function parseJava(props) {
    const text = props.children.split("\n");    // Array
    const textElem = [];                        // Array of JSX elements

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

        if (str[str.length - 1] === "{") {
            indentLevel += 2;
        }

        k++;
    });

    return(
        <div className="code-text-wrapper">
            {textElem}
        </div>
    );
}

export default CopyCode;