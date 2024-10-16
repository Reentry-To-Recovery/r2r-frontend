import { Link } from "react-router-dom";

interface BreadcrumbLink {
    title: string
    to: string
}

interface AdminBreadcrumbProps {
    links: BreadcrumbLink[]
    current: string
}

const AdminBreadcrumb = (props: AdminBreadcrumbProps) => {
    const { links, current } = props;

    return (
        <div className="breadcrumb flex justify">
            <div className="inner-breadcrumb flex" style={{ columnGap: "8px" }}>
                {links.map((link, index) => {
                    return <div className="flex" style={{ columnGap: "8px" }}><Link className="breadcrumb-link" to={link.to} key={index}>{link.title}</Link><p>{">"}</p></div>;
                })}
                {current}
            </div>
        </div>
    );
}

export default AdminBreadcrumb;