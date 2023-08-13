import { Col, Row } from "antd";
import { ReactNode } from "react";

export function Settings(props: { children: ReactNode, label: ReactNode | string }) {
  return (
      <Row>
          <Col span={8}>
              <div className="font-medium">{props.label}</div>
          </Col>
          <Col span={16}>
              <div className="ml-4">{props.children}</div>
          </Col>
      </Row>
  )
}