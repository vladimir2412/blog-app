import React, { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageError } from 'widgets/PageError/ui/PageError';

interface ErrorBoundaryProps {
  children:React.ReactNode;
}
interface ErrorBoundaryState {
  hasError:boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props:ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error:Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error:Error, info:React.ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <Suspense fallback={<Loader />}>
          <PageError />
        </Suspense>
      )
    }
    return children
  }
}
