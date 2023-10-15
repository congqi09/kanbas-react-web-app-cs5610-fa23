const Styles = () => {
    const colorBlack = { color: "black" };
    const padding10px = { padding: "10px" };
    const bgBlue = {
        ...padding10px,
        "backgroundColor": "lightblue",
        "color": "black"
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...padding10px,
        ...colorBlack
    };
    return(
        <div>
            <h2>Styles</h2>
            <div style={{"background-color": "lightyellow",
                "color": "black", padding: "10px" }}>
                yellow background</div>
            <div style={ bgRed }> Red background </div>
            <div style={ bgBlue }>Blue background</div>
        </div>
    );
};
export default Styles   