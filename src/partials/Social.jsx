import {Tag } from 'antd';
import {
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined
} from '@ant-design/icons';
export default function Social() {
    return (
        <div className="social-wrapper">
            <h5>
                Find us
            </h5>
            <div><Tag icon={< TwitterOutlined />} color="#55acee">
                Twitter
            </Tag>
            <Tag icon={< YoutubeOutlined />} color="#cd201f">
                Youtube
            </Tag>
            <Tag icon={< FacebookOutlined />} color="#3b5999">
                Facebook
            </Tag>
            <Tag icon={< LinkedinOutlined />} color="#55acee">
                LinkedIn
            </Tag>
            </div>
        </div>
    );
}