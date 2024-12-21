import React from 'react';
import { ConfigProvider } from 'antd';
import { themeConfig } from 'configs';
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ConfigProvider theme={themeConfig.themeVariants.dark}>
        {children}
      </ConfigProvider>
    </>
  );
}
