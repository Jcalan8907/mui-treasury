export default ({
  header,
  sidebar,
  secondarySidebar,
  content,
  footer,
} = {}) => ({
  sidebar: {
    anchor: 'left',
    variant: 'temporary',
    width: 256,
    collapsible: false,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'fixed',
      autoHidden: true,
      hiddenBreakpoint: 'sm',
    },
    ...sidebar,
  },
  secondarySidebar: {
    anchor: 'right',
    variant: 'persistent',
    width: 244,
    collapsible: true,
    collapsedWidth: 64,
    hidden: false,
    inset: false,
    insetProps: {
      position: 'sticky',
      autoHidden: true,
      hiddenBreakpoint: 'sm',
    },
    ...secondarySidebar,
  },
  header: {
    position: 'fixed',
    offsetHeight: 64,
    clipped: true,
    secondaryClipped: false,
    persistentBehavior: 'fit',
    secondaryPersistentBehavior: 'fit',
    ...header,
  },
  content: {
    persistentBehavior: 'fit',
    secondaryPersistentBehavior: 'none',
    ...content,
  },
  footer: {
    persistentBehavior: 'fit',
    secondaryPersistentBehavior: 'none',
    insetBehavior: 'fit',
    secondaryInsetBehavior: 'none',
    ...footer,
  },
});
