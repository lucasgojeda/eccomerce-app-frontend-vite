


export const types = {

    /* UI */

    uiLogout: '[UI] Ui logout',

    uiOpenProductModal: '[UI] Open modal',
    uiCloseProductModal: '[UI] Close modal',
    uiOpenProductModalEdit: '[UI] Open edit modal',
    uiCloseProductModalEdit: '[UI] Close edit modal',

    uiOpenUserModalAdd: '[UI] Open add user modal',
    uiCloseUserModalAdd: '[UI] Close add user modal',
    uiOpenUserModalEdit: '[UI] Open edit user modal',
    uiCloseUserModalEdit: '[UI] Close edit user modal',

    uiCircularProgressOn: '[UI] Circular progress loading...',
    uiCircularProgressOff: '[UI] Circular progress finish',

    uiOpenSuccessAlert: '[UI] Open success alert',
    uiCloseSuccessAlert: '[UI] Close success alert',
    uiOpenErrorAlert: '[UI] Open error alert',
    uiCloseErrorAlert: '[UI] Close error alert',

    uiOpenProgressBackdrop: '[UI] Open progress backdrop',
    uiCloseProgressBackdrop: '[UI] Close progress backdrop',

    uiOpenDialogDelete: '[UI] Open dialog delete',
    uiCloseDialogDelete: '[UI] Close dialog delete',
    uiOpenDialogFields: '[UI] Open dialog fields',
    uiCloseDialogFields: '[UI] Close dialog fields',

    uiOpenRecordModal: '[UI] Open record modal',
    uiCloseRecordModal: '[UI] Close record modal',

    uiOpenCategoriesModal: '[UI] Open categories modal',
    uiCloseCategoriesModal: '[UI] Close categories modal',


    /* AUTH */

    authChecking: '[AUTH] Checking login state',
    authCheckingFinish: '[AUTH] Finish checking login state',
    authStartLogin: '[AUTH] Start login',
    authLogin: '[AUTH] Login',
    authRegister: '[AUTH] Register',
    authStartRegister: '[AUTH] Start register',
    authStartTokenRenew: '[AUTH] Start token renew',
    authLogout: '[AUTH] Logout',


    /* USERS */

    loadUsers: '[USERS] Users loaded',
    activeUser: '[USERS] User active',
    clearActiveUser: '[USERS] Clear active product',
    usersLogout: '[USERS] Logout',
    addUser: '[USERS] User added',
    updateUser: '[USERS] User updated',
    deleteUser: '[USERS] User deleted',


    /* PRODUCTS */

    activeProduct: '[PRODUCT] Product active',
    clearActiveProduct: '[PRODUCT] Clear active product',
    clearFilteredProducts: '[PRODUCT] Clear filtered products',
    loadProducts: '[PRODUCT] Products loaded',
    loadFilteredProducts: '[PRODUCT] Filtered products loaded',
    addProduct: '[PRODUCT] Product added',
    updateProduct: '[PRODUCT] Product updated',
    deleteProduct: '[PRODUCT] Product deleted',
    productLoaded: '[PRODUCT] Product loaded',
    productsLogout: '[PRODUCT] Products clear',

    /* CATEGORIES */

    loadCategories: '[CATEGORIES] Categories loaded',
    addNewCategory: '[CATEGORIES] New category added',
    updateCategory: '[CATEGORIES] Category updated',
    deleteCategory: '[CATEGORIES] Category deleted',

    /* BIN */

    addBinProduct: '[BIN] Product bin added',
    deleteBinProduct: '[BIN] Product bin deleted',
    setActiveBinProduct: '[BIN] Bin product active',
    clearActiveBinProduct: '[BIN] Clear active bin product',
    loadBinProducts: '[BIN] Bin products loaded',
    productsBinLogout: '[BIN] Bin products logout',

    addBinUser: '[BIN] User bin added',
    deleteBinUser: '[BIN] User bin deleted',
    setActiveBinUser: '[BIN] Bin user active',
    clearActiveBinUser: '[BIN] Clear active bin user',
    loadBinUsers: '[BIN] Bin users loaded',
    usersBinLogout: '[BIN] Bin users logout',

    /* RECORDS */

    loadRecords: '[RECORDS] Records loaded',
    activeRecord: '[RECORDS] Record ctive',
    addNewRecord: '[RECORDS] New record added',
    clearActiveRecord: '[RECORDS] Clear record active',
    recordsLogout: '[RECORDS] Recordss logout',
    
    /* CART */
    
    loadCart: '[CART] Cart loaded',
    cartLogout: '[CART] Cart logout',
    updateCartProduct: '[CART] Cart product updated',
    deleteCartProduct: '[CART] Cart product deleted',
    
    /* SALES */
    
    activeSale: '[SALES] Sale active',
    clearActiveSale: '[SALES] Clear active sale',
    loadSales: '[SALES] Sales loaded',
    addNewSale: '[SALES] New sale added',
    updateFilteredSales: '[SALES] Sale updated',
    salesLogout: '[SALES] Sales logout',
    
    
    /* NOTIFICATIONS */
    
    loadNotifications: '[NOTIFICATIONS] Notifications loaded',
    addNotification: '[NOTIFICATIONS] Notification added',
    addSale_user: '[NOTIFICATIONS] Sale_user added',
    updateNotification: '[NOTIFICATIONS] Notification updated',
    notificationsLogout: '[NOTIFICATIONS] Notifications logout',
    

    /* DASHBOARD (STATICS) */

    loadDashboardProducts: '[DASHBOARD] Statics of products loaded',
    loadDashboardBinProducts: '[DASHBOARD] Statics of binProducts loaded',
    loadDashboardUsers: '[DASHBOARD] Statics of users loaded',
    loadDashboardBinUsers: '[DASHBOARD] Statics of binUsers loaded',
    loadDashboardSales: '[DASHBOARD] Statics of sales loaded',
    loadDashboardRecords: '[DASHBOARD] Statics of records loaded',

    addOneDashboardProducts: '[DASHBOARD] One product added to the statics',
    subtractOneDashboardProducts: '[DASHBOARD] One product subtracted to the statics',

    addOneDashboardBinProducts: '[DASHBOARD] One bin product added to the statics',
    subtractOneDashboardBinProducts: '[DASHBOARD] One bin product subtracted to the statics',

    addOneDashboardUsers: '[DASHBOARD] One user added to the statics',
    subtractOneDashboardUsers: '[DASHBOARD] One user subtracted to the statics',

    addOneDashboardBinUsers: '[DASHBOARD] One bin user added to the statics',
    subtractOneDashboardBinUsers: '[DASHBOARD] One bin user subtracted to the statics',

    addOneDashboardSales: '[DASHBOARD] One sale added to the statics',
    subtractOneDashboardSales: '[DASHBOARD] One sale subtracted to the statics',

    addOneDashboardRecords: '[DASHBOARD] One regist added to the statics',
    subtractOneDashboardRecords: '[DASHBOARD] One regist subtracted to the statics',

    staticsLogout: '[DASHBOARD] Statics logout',


}