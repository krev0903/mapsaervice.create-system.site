export default function ApplicationLogo(props) {
    const logoPath = import.meta.env.VITE_API_LOGO_PATH

    return (
        <img
            {...props}
            src={logoPath}
            alt="Application Logo"
        />
    );
}
