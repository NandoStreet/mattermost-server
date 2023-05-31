import React, { ReactNode } from 'react';

interface SettingsGroupProps {
    show: boolean;
    header?: ReactNode;
    title?: ReactNode;
    subtitle?: ReactNode;
    children?: ReactNode;
    container?: boolean;
}

export default class SettingsGroup extends React.PureComponent<SettingsGroupProps> {
    static defaultProps: SettingsGroupProps = {
        show: true,
        container: true,
    };

    render() {
        let wrapperClass = '';
        let contentClass = '';

        if (!this.props.show) {
            return null;
        }

        if (this.props.container) {
            wrapperClass = 'admin-console__wrapper';
            contentClass = 'admin-console__content';
        }

        let header = null;
        if (this.props.header) {
            header = (
                <h4>
                    {this.props.header}
                </h4>
            );
        }

        let title = null;
        if (!this.props.header && this.props.title) {
            title = (
                <div className={'section-title'}>
                    {this.props.title}
                </div>
            );
        }

        let subtitle = null;
        if (!this.props.header && this.props.subtitle) {
            subtitle = (
                <div className={'section-subtitle'}>
                    {this.props.subtitle}
                </div>
            );
        }

        let sectionHeader = null;
        if (title || subtitle) {
            sectionHeader = (
                <div className={'section-header'}>
                    {title}
                    {subtitle}
                </div>
            );
        }

        return (
            <div className={wrapperClass}>
                <div className={contentClass}>
                    {header}
                    {sectionHeader}
                    {this.props.children}
                </div>
            </div>
        );
    }
}
