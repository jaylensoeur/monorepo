import * as React from "react";
import { create } from "react-test-renderer";

import Spinner from "./Spinner";

describe("<Spinner />", () => {
    it("should render", async () => {
        const component = create(<Spinner isLoading={true} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it("should not render when loading is set to false", async () => {
        const component = create(<Spinner isLoading={false} />);
        const instance = component.root;

        expect(instance.props.isLoading).toBe(false);
        expect(component.toJSON()).toBeNull();
    });

    it("should render when loading is set to true", async () => {
        const component = create(<Spinner isLoading={true} />);
        const instance = component.root;

        expect(instance.props.isLoading).toBe(true);
        expect(component.toJSON().type).toBe('div');
    });
});
