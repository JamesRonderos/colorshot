const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        marginBottom: "-4px",
        "&:hover $deleteIcon": {
            color: "white",
            transform: "scale(1.5)",
        },
        "&:hover $colorText": {
            transform: "scale(1.1)",
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rbga(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    },
    colorText: {
        transition: "all 0.3s ease-in-out"
    }
};
export default styles;