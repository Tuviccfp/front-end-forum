import * as React from "react";


export default function ModelMessageComponent({message}) {
    return (
        <div>
            {message.visible && (
                <div style={{
                    backgroundColor: message.color, 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10,
                    width: 300,
                    gap: 10,
                    padding: 6,
                    borderRadius: 10,
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.75)"
                }}>
                    {message.icon} {message.message + + message.status}
                </div>
            )}
        </div>
    )
}