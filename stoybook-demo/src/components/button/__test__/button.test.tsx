import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button, { ButtonProps, btnPadding } from "../index";
import { color, typography } from "../../shared/styles";

const defaultProps = {
	onClick: jest.fn(),
	className: "testProps",
};
const testProps: ButtonProps = {
	appearance: "primary",
	size: "small",
	className: "testProps",
};
const disabledProps: ButtonProps = {
	disabled: true,
	onClick: jest.fn(),
};

describe("test Button component", () => {
	it("should render the correct default button", () => {
		const wrapper = render(<Button {...defaultProps}>hello</Button>);
		const ele = wrapper.getByTestId("button");
    expect(ele).toBeInTheDocument();
    // text
		const text = wrapper.getByText("hello");
    expect(text).toBeTruthy();
    // tagname
		expect(ele.tagName).toEqual("BUTTON");
		expect(ele).not.toHaveAttribute("isDisabled");
		expect(ele).not.toHaveAttribute("isLinked");
		// classname
		expect(
			ele
				.getAttribute("class")
				?.split(" ")
				.includes("testProps")
		).toEqual(true);
		// click
		fireEvent.click(ele);
		expect(defaultProps.onClick).toHaveBeenCalled();
		// span
		expect(ele.getElementsByTagName("span")).toBeTruthy();
		// default props
		expect(ele).toHaveStyle(`background:${color.tertiary}`);
		expect(ele).toHaveStyle(`color: ${color.darkest}`);
		// size
		// expect(ele).toHaveStyle(`padding: ${btnPadding.medium}`);
		expect(ele).toHaveStyle(`font-size:${typography.size.s2}px`);
  });
  // appearance
	it("should render correct appearance ", () => {
		let wrapper = render(<Button {...testProps}>hello</Button>);
		let ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(`background:${color.primary}`);
		expect(ele).toHaveStyle(`color: ${color.lightest}`);
		cleanup();
		wrapper = render(<Button appearance="inverseOutline">hello</Button>);
		ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(
			`box-shadow: ${color.lightest} 0 0 0 1px inset`
		);
		expect(ele).toHaveStyle(`color: ${color.lightest}`);
		cleanup();
		wrapper = render(<Button appearance="inversePrimary">hello</Button>);
		ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(`background:${color.lightest}`);
		expect(ele).toHaveStyle(`color: ${color.primary}`);
		cleanup();
		wrapper = render(<Button appearance="inverseSecondary">hello</Button>);
		ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(`background:${color.lightest}`);
		expect(ele).toHaveStyle(`color: ${color.secondary}`);
		cleanup();
		wrapper = render(<Button appearance="outline">hello</Button>);
		ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(`background:transparent`);
		expect(ele).toHaveStyle(`color: ${color.dark}`);
		cleanup();
		wrapper = render(<Button appearance="primaryOutline">hello</Button>);
		ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(`box-shadow: ${color.primary} 0 0 0 1px inset`);
		expect(ele).toHaveStyle(`color: ${color.primary}`);
		cleanup();
		wrapper = render(<Button appearance="secondary">hello</Button>);
		ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(`background:${color.secondary}`);
		expect(ele).toHaveStyle(`color: ${color.lightest}`);
		cleanup();
		wrapper = render(<Button appearance="secondaryOutline">hello</Button>);
		ele = wrapper.getByTestId("button");
		expect(ele).toHaveStyle(
			`box-shadow: ${color.secondary} 0 0 0 1px inset`
		);
		expect(ele).toHaveStyle(`color: ${color.secondary}`);
  });
  // size
	it("should render correct size ", () => {
		let wrapper = render(<Button {...testProps}>hello</Button>);
		const ele = wrapper.getByTestId("button");
		// expect(ele).toHaveStyle(`padding: ${btnPadding.small}`);
		expect(ele).toHaveStyle(`font-size:${typography.size.s1}px`);
  });
  // link
	it("should render a link", () => {
		const wrapper = render(
			<Button isLink href="/">
				link button
			</Button>
		);
		const ele = wrapper.getByTestId("button");
		expect(ele).toBeInTheDocument();
		expect(ele.tagName).toEqual("A");
		expect(ele).toHaveAttribute("href", "/");
  });
  // disabled
	it("should render disabled ", () => {
		const wrapper = render(<Button {...disabledProps}>hello</Button>);
		const ele = wrapper.getByTestId("button");
		expect(ele).toBeInTheDocument();
		expect(ele).toHaveStyle("cursor: not-allowed");
		fireEvent.click(ele);
		expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
  // loading
	it("should render loading ", () => {
		const wrapper = render(<Button isLoading>hello</Button>);
		const ele = wrapper.getByTestId("button");
		expect(ele).toBeInTheDocument();
		expect(ele).toHaveStyle("cursor: progress");
		const text = wrapper.getByText("hello");
		expect(text).toHaveStyle("opacity: 0");
		const wrapper2 = render(
			<Button isLoading loadingText="stella">
				hello
			</Button>
		);
		const text2 = wrapper2.getByText("stella");
		expect(text2).toBeTruthy();
  });
  // clickable
	it("should isUnClickable ", () => {
		const wrapper = render(<Button isUnClickable>hello</Button>);
		const ele = wrapper.getByTestId("button");
		expect(ele).toBeInTheDocument();
		expect(ele).toHaveStyle("pointer-events: none");
		fireEvent.click(ele);
		expect(disabledProps.onClick).not.toHaveBeenCalled();
	});
});