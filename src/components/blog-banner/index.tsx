import { Button } from "../buttons";
import { BlogBannerContainer } from "./style";

export const BlogBanner = () => {
    return (
        <BlogBannerContainer>
            <h3>
                I have a blog where I write about frontend development and UX
                design
            </h3>
            <a href={"https://blog.stephcrown.com"}>
                {" "}
                <Button>View Blog</Button>
            </a>
        </BlogBannerContainer>
    );
};
