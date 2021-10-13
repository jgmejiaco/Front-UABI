import React, { FC, useContext } from "react";
import Layout from "antd/lib/layout";
import { TemplateConstext } from "./template_context";
import AppSider from "./sider";
import AppHeader from "./header";

interface ITemplate {}

const Template: FC<ITemplate> = ({ children }) => {
    const { Header, Sider, Content } = Layout;
    const context = useContext(TemplateConstext);
    const collapsible = false; // TO DO: verificar si esto debe ser collapsible
    const sider_ops = {
        width: 280,
        style: { backgroundColor: "white" },
        ...(collapsible
            ? {
                  trigger: null,
                  collapsible,
                  collapsed: context.menu_collapsed,
              }
            : {}),
    };
    return (
        <Layout className="w-100 h-100">
            <Sider {...sider_ops}>
                <AppSider width={sider_ops.width}/>
            </Sider>
            <Layout className="site-layout">
                <Header className="uabi-header" style={{ padding: 0 }}>
                    <AppHeader collapsible={collapsible} />
                </Header>
                <Content style={{overflow: "auto"}}>
                    <div className="content w-100 uabi-main-content" >
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Template;
