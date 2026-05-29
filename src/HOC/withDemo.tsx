import type React from "react";

function withDemo<P>(WithinComponent: React.ComponentType<P>) {
  return function EnhancedComponent(props: P & { title: string }) {
    // logic here
    return (
      <div className="flex h-full justify-center items-center border-2 flex-col">
        <h1>{props.title}</h1>
        <WithinComponent {...props} />
      </div>
    );
  };
}

export { withDemo };
