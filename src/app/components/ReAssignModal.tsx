import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

interface ReAssignModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (assignee: string) => void;
}

const ReAssignModal: React.FC<ReAssignModalProps> = ({ visible, onClose, onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: { assignee: string }) => {
    onSubmit(values.assignee);
    form.resetFields();
  };

  return (
    <Modal
      title="Re-Assign Ticket"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="assignee"
          label="Assign To"
          rules={[{ required: true, message: 'Please enter the assignee name!' }]}
        >
          <Input placeholder="Enter assignee name" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Re-Assign
        </Button>
      </Form>
    </Modal>
  );
};

export default ReAssignModal;
