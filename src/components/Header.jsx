const Header = ({title, subtitle}) => {

    return (
        <div className="custom-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <div className="line-header"></div>
        </div>
    );
};

export default Header;