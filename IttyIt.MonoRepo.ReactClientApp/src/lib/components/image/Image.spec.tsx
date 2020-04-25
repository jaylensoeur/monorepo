import * as React from "react";
import { create } from "react-test-renderer";

import Image from "./Image";

describe("<Image />", () => {
    it("should render", async () => {
        const src = "test.jpg";
        const component = create(<Image imageUrl={src}/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
    it("should accept a src", async () => {
        const src = "test.jpg";
        const component = create(<Image imageUrl={src}/>);
        const instance = component.root;
        const img = instance.findByType("img");

        expect(img.props.src).toBe(src);
    });

    it("should render a child component", async () => {
        const src = "test.jpg";
        const postsCallbackMock = jest.fn();

        create(<Image imageUrl={src} render={postsCallbackMock}/>);
        expect(postsCallbackMock).toHaveBeenCalled();
    });
});
