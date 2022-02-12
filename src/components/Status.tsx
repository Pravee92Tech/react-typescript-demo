import './Status.css'
// union off string literals
type StatusProps = {
    status: string
  // status: 'loading' | 'error' | 'success'
}
export const Status = (props: StatusProps) => {
    let message='';
    let cssClassName = '';
    const { status } = props
    if (status === 'loading') {
        message = 'Loading...';
        cssClassName = status;
    } else if (status === 'success') {
        message = 'Success';
        cssClassName = status;
    } else if (status === 'error') {
        message = 'Error';
        cssClassName = status;
    }
    return (
        <div>
            <h2 className={cssClassName}>Status  - {message}</h2>
        </div>
    )
};
