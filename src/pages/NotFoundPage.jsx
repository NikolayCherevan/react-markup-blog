import {Alert} from 'antd';

export default function NotFoundPage() {
    return (
        <div>
            <Alert
                style={{
                    marginTop: '20px'
                }}
                message="Error"
                description="  oh.. that page not found sorry"
                type="error"
                showIcon />
        </div>
    );
}