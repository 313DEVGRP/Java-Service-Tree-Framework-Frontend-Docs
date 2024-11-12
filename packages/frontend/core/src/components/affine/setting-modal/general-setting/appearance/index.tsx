import type { RadioItem } from '@affine/component';
import { RadioGroup, Switch } from '@affine/component';
import {
  SettingHeader,
  SettingRow,
  SettingWrapper,
} from '@affine/component/setting-components';
import { useI18n } from '@affine/i18n';
import type { AppSetting } from '@toeverything/infra';
import { fontStyleOptions, windowFrameStyleOptions } from '@toeverything/infra';
import { useTheme } from 'next-themes';
import { useCallback, useMemo } from 'react';

import { useAppSettingHelper } from '../../../../../hooks/affine/use-app-setting-helper';
import { LanguageMenu } from '../../../language-menu';
import { DateFormatSetting } from './date-format-setting';
import { settingWrapper } from './style.css';

export const ThemeSettings = () => {
  const t = useI18n();
  const { setTheme, theme } = useTheme();

  const radioItems = useMemo<RadioItem[]>(
    () => [
      {
        value: 'system',
        label: t['com.arms.themeSettings.system'](),
        testId: 'system-theme-trigger',
      },
      {
        value: 'light',
        label: t['com.arms.themeSettings.light'](),
        testId: 'light-theme-trigger',
      },
      {
        value: 'dark',
        label: t['com.arms.themeSettings.dark'](),
        testId: 'dark-theme-trigger',
      },
    ],
    [t]
  );

  return (
    <RadioGroup
      items={radioItems}
      value={theme}
      width={250}
      className={settingWrapper}
      onChange={useCallback(
        (value: string) => {
          setTheme(value);
        },
        [setTheme]
      )}
    />
  );
};

const FontFamilySettings = () => {
  const t = useI18n();
  const { appSettings, updateSettings } = useAppSettingHelper();

  const radioItems = useMemo(() => {
    return fontStyleOptions.map(({ key, value }) => {
      const label =
        key === 'Mono'
          ? t[`com.arms.appearanceSettings.fontStyle.mono`]()
          : key === 'Sans'
            ? t['com.arms.appearanceSettings.fontStyle.sans']()
            : key === 'Serif'
              ? t['com.arms.appearanceSettings.fontStyle.serif']()
              : '';
      return {
        value: key,
        label,
        testId: 'system-font-style-trigger',
        style: { fontFamily: value },
      } satisfies RadioItem;
    });
  }, [t]);

  return (
    <RadioGroup
      items={radioItems}
      value={appSettings.fontStyle}
      width={250}
      className={settingWrapper}
      onChange={useCallback(
        (value: AppSetting['fontStyle']) => {
          updateSettings('fontStyle', value);
        },
        [updateSettings]
      )}
    />
  );
};

export const AppearanceSettings = () => {
  const t = useI18n();

  const { appSettings, updateSettings } = useAppSettingHelper();

  return (
    <>
      <SettingHeader
        title={t['com.arms.appearanceSettings.title']()}
        subtitle={t['com.arms.appearanceSettings.subtitle']()}
      />

      <SettingWrapper title={t['com.arms.appearanceSettings.theme.title']()}>
        <SettingRow
          name={t['com.arms.appearanceSettings.color.title']()}
          desc={t['com.arms.appearanceSettings.color.description']()}
        >
          <ThemeSettings />
        </SettingRow>
        <SettingRow
          name={t['com.arms.appearanceSettings.font.title']()}
          desc={t['com.arms.appearanceSettings.font.description']()}
        >
          <FontFamilySettings />
        </SettingRow>
        <SettingRow
          name={t['com.arms.appearanceSettings.language.title']()}
          desc={t['com.arms.appearanceSettings.language.description']()}
        >
          <div className={settingWrapper}>
            <LanguageMenu />
          </div>
        </SettingRow>
        {environment.isDesktop ? (
          <SettingRow
            name={t['com.arms.appearanceSettings.clientBorder.title']()}
            desc={t['com.arms.appearanceSettings.clientBorder.description']()}
            data-testid="client-border-style-trigger"
          >
            <Switch
              checked={appSettings.clientBorder}
              onChange={checked => updateSettings('clientBorder', checked)}
            />
          </SettingRow>
        ) : null}

        <SettingRow
          name={t['com.arms.appearanceSettings.fullWidth.title']()}
          desc={t['com.arms.appearanceSettings.fullWidth.description']()}
        >
          <Switch
            data-testid="full-width-layout-trigger"
            checked={appSettings.fullWidthLayout}
            onChange={checked => updateSettings('fullWidthLayout', checked)}
          />
        </SettingRow>
        {runtimeConfig.enableNewSettingUnstableApi && environment.isDesktop ? (
          <SettingRow
            name={t['com.arms.appearanceSettings.windowFrame.title']()}
            desc={t['com.arms.appearanceSettings.windowFrame.description']()}
          >
            <RadioGroup
              items={windowFrameStyleOptions.map(option => ({
                value: option,
                label: t[`com.arms.appearanceSettings.windowFrame.${option}`](),
              }))}
              value={appSettings.windowFrameStyle}
              className={settingWrapper}
              width={250}
              onChange={(value: AppSetting['windowFrameStyle']) => {
                updateSettings('windowFrameStyle', value);
              }}
            />
          </SettingRow>
        ) : null}
        {/* 테마 수정 삭제 {runtimeConfig.enableThemeEditor ? <ThemeEditorSetting /> : null} */}
      </SettingWrapper>
      {runtimeConfig.enableNewSettingUnstableApi ? (
        <SettingWrapper title={t['com.arms.appearanceSettings.date.title']()}>
          <SettingRow
            name={t['com.arms.appearanceSettings.dateFormat.title']()}
            desc={t['com.arms.appearanceSettings.dateFormat.description']()}
          >
            <div className={settingWrapper}>
              <DateFormatSetting />
            </div>
          </SettingRow>
          <SettingRow
            name={t['com.arms.appearanceSettings.startWeek.title']()}
            desc={t['com.arms.appearanceSettings.startWeek.description']()}
          >
            <Switch
              checked={appSettings.startWeekOnMonday}
              onChange={checked => updateSettings('startWeekOnMonday', checked)}
            />
          </SettingRow>
        </SettingWrapper>
      ) : null}

      {environment.isDesktop ? (
        <SettingWrapper
          title={t['com.arms.appearanceSettings.sidebar.title']()}
        >
          <SettingRow
            name={t['com.arms.appearanceSettings.noisyBackground.title']()}
            desc={t[
              'com.arms.appearanceSettings.noisyBackground.description'
            ]()}
          >
            <Switch
              checked={appSettings.enableNoisyBackground}
              onChange={checked =>
                updateSettings('enableNoisyBackground', checked)
              }
            />
          </SettingRow>
          {environment.isMacOs && (
            <SettingRow
              name={t['com.arms.appearanceSettings.translucentUI.title']()}
              desc={t[
                'com.arms.appearanceSettings.translucentUI.description'
              ]()}
            >
              <Switch
                checked={appSettings.enableBlurBackground}
                onChange={checked =>
                  updateSettings('enableBlurBackground', checked)
                }
              />
            </SettingRow>
          )}
        </SettingWrapper>
      ) : null}
    </>
  );
};
