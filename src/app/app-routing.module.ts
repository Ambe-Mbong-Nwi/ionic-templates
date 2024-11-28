import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'menu-list',
    loadChildren: () => import('./menu-list/menu-list.module').then(m => m.MenuListPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then(m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then(m => m.VtPopupPageModule)
  },
  {
    path: 'slider-demo',
    loadChildren: () => import('./slider-demo/slider-demo.module').then(m => m.SliderDemoPageModule)
  },
  {
    path: 'hungerz-home',
    loadChildren: () => import('./hungerz-home/hungerz-home.module').then(m => m.HungerzHomePageModule)
  },
  {
    path: 'hungerz-store',
    loadChildren: () => import('./hungerz-store/hungerz-store.module').then(m => m.HungerzStorePageModule)
  },
  {
    path: 'hungerz-items',
    loadChildren: () => import('./hungerz-items/hungerz-items.module').then(m => m.HungerzItemsPageModule)
  },
  {
    path: 'hungerz-table-booking',
    loadChildren: () => import('./hungerz-table-booking/hungerz-table-booking.module').then(m => m.HungerzTableBookingPageModule)
  },
  {
    path: 'hungerz-offers',
    loadChildren: () => import('./hungerz-offers/hungerz-offers.module').then(m => m.HungerzOffersPageModule)
  },
  {
    path: 'clipix-sign-in',
    loadChildren: () => import('./clipix-sign-in/clipix-sign-in.module').then(m => m.ClipixSignInPageModule)
  },
  {
    path: 'clipix-sign-up',
    loadChildren: () => import('./clipix-sign-up/clipix-sign-up.module').then(m => m.ClipixSignUpPageModule)
  },
  {
    path: 'clipix-home',
    loadChildren: () => import('./clipix-home/clipix-home.module').then(m => m.ClipixHomePageModule)
  },
  {
    path: 'clipix-search',
    loadChildren: () => import('./clipix-search/clipix-search.module').then(m => m.ClipixSearchPageModule)
  },
  {
    path: 'clipix-movie',
    loadChildren: () => import('./clipix-movie/clipix-movie.module').then(m => m.ClipixMoviePageModule)
  },
  {
    path: 'clipix-watchlist',
    loadChildren: () => import('./clipix-watchlist/clipix-watchlist.module').then(m => m.ClipixWatchlistPageModule)
  },
  {
    path: 'clipix-account',
    loadChildren: () => import('./clipix-account/clipix-account.module').then(m => m.ClipixAccountPageModule)
  },
  {
    path: 'clipix-my-profile',
    loadChildren: () => import('./clipix-my-profile/clipix-my-profile.module').then(m => m.ClipixMyProfilePageModule)
  },
  {
    path: 'clipix-settings',
    loadChildren: () => import('./clipix-settings/clipix-settings.module').then(m => m.ClipixSettingsPageModule)
  },
  {
    path: 'clipix-support',
    loadChildren: () => import('./clipix-support/clipix-support.module').then(m => m.ClipixSupportPageModule)
  },
  {
    path: 'clipix-subscribe',
    loadChildren: () => import('./clipix-subscribe/clipix-subscribe.module').then(m => m.ClipixSubscribePageModule)
  },
  {
    path: 'clipix-payment',
    loadChildren: () => import('./clipix-payment/clipix-payment.module').then(m => m.ClipixPaymentPageModule)
  },
  {
    path: 'clipix-subscribed',
    loadChildren: () => import('./clipix-subscribed/clipix-subscribed.module').then(m => m.ClipixSubscribedPageModule)
  },
  {
    path: 'clipix-web-series',
    loadChildren: () => import('./clipix-web-series/clipix-web-series.module').then(m => m.ClipixWebSeriesPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./clipix-tabs/clipix-tabs.module').then(m => m.ClipixTabsPageModule)
  },
  {
    path: 'doctoworld-sign-in',
    loadChildren: () => import('./doctoworld-sign-in/doctoworld-sign-in.module').then(m => m.DoctoworldSignInPageModule)
  },
  {
    path: 'doctoworld-home',
    loadChildren: () => import('./doctoworld-home/doctoworld-home.module').then(m => m.DoctoworldHomePageModule)
  },
  {
    path: 'doctoworld-medicines',
    loadChildren: () => import('./doctoworld-medicines/doctoworld-medicines.module').then(m => m.DoctoworldMedicinesPageModule)
  },
  {
    path: 'doctoworld-medicine-info',
    loadChildren: () => import('./doctoworld-medicine-info/doctoworld-medicine-info.module').then(m => m.DoctoworldMedicineInfoPageModule)
  },
  {
    path: 'doctoworld-cart',
    loadChildren: () => import('./doctoworld-cart/doctoworld-cart.module').then(m => m.DoctoworldCartPageModule)
  },
  {
    path: 'doctoworld-confirm-order',
    loadChildren: () => import('./doctoworld-confirm-order/doctoworld-confirm-order.module').then(m => m.DoctoworldConfirmOrderPageModule)
  },
  {
    path: 'doctoworld-doctors',
    loadChildren: () => import('./doctoworld-doctors/doctoworld-doctors.module').then(m => m.DoctoworldDoctorsPageModule)
  },
  {
    path: 'doctoworld-list-of-doctors',
    loadChildren: () => import('./doctoworld-list-of-doctors/doctoworld-list-of-doctors.module').then(m => m.DoctoworldListOfDoctorsPageModule)
  },
  {
    path: 'doctoworld-doctor-info',
    loadChildren: () => import('./doctoworld-doctor-info/doctoworld-doctor-info.module').then(m => m.DoctoworldDoctorInfoPageModule)
  },
  {
    path: 'doctoworld-book-appointment',
    loadChildren: () => import('./doctoworld-book-appointment/doctoworld-book-appointment.module').then(m => m.DoctoworldBookAppointmentPageModule)
  },
  {
    path: 'doctoworld-hospital',
    loadChildren: () => import('./doctoworld-hospital/doctoworld-hospital.module').then(m => m.DoctoworldHospitalPageModule)
  },
  {
    path: 'doctoworld-hospital-info',
    loadChildren: () => import('./doctoworld-hospital-info/doctoworld-hospital-info.module').then(m => m.DoctoworldHospitalInfoPageModule)
  },
  {
    path: 'doctoworld-my-appointments',
    loadChildren: () => import('./doctoworld-my-appointments/doctoworld-my-appointments.module').then(m => m.DoctoworldMyAppointmentsPageModule)
  },
  {
    path: 'doctoworld-appointment-detail',
    loadChildren: () => import('./doctoworld-appointment-detail/doctoworld-appointment-detail.module').then(m => m.DoctoworldAppointmentDetailPageModule)
  },
  {
    path: 'doctoworld-account',
    loadChildren: () => import('./doctoworld-account/doctoworld-account.module').then(m => m.DoctoworldAccountPageModule)
  },
  {
    path: 'doctoworld-wallet',
    loadChildren: () => import('./doctoworld-wallet/doctoworld-wallet.module').then(m => m.DoctoworldWalletPageModule)
  },
  {
    path: 'doctoworld-my-orders',
    loadChildren: () => import('./doctoworld-my-orders/doctoworld-my-orders.module').then(m => m.DoctoworldMyOrdersPageModule)
  },
  {
    path: 'doctoworld-order-info',
    loadChildren: () => import('./doctoworld-order-info/doctoworld-order-info.module').then(m => m.DoctoworldOrderInfoPageModule)
  },
  {
    path: 'doctoworld-pill-reminders',
    loadChildren: () => import('./doctoworld-pill-reminders/doctoworld-pill-reminders.module').then(m => m.DoctoworldPillRemindersPageModule)
  },
  {
    path: 'doctoworld-select-dayes',
    loadChildren: () => import('./doctoworld-select-dayes/doctoworld-select-dayes.module').then(m => m.DoctoworldSelectDayesPageModule)
  },
  {
    path: 'doctoworld-create-pill-reminders',
    loadChildren: () => import('./doctoworld-create-pill-reminders/doctoworld-create-pill-reminders.module').then(m => m.DoctoworldCreatePillRemindersPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./doctoworld-tabs/doctoworld-tabs.module').then(m => m.DoctoworldTabsPageModule)
  },
  {
    path: 'gopool-sign-in',
    loadChildren: () => import('./gopool-sign-in/gopool-sign-in.module').then(m => m.GopoolSignInPageModule)
  },
  {
    path: 'gopool-home',
    loadChildren: () => import('./gopool-home/gopool-home.module').then(m => m.GopoolHomePageModule)
  },
  {
    path: 'gopool-list-of-pooler',
    loadChildren: () => import('./gopool-list-of-pooler/gopool-list-of-pooler.module').then(m => m.GopoolListOfPoolerPageModule)
  },
  {
    path: 'gopool-pool-info',
    loadChildren: () => import('./gopool-pool-info/gopool-pool-info.module').then(m => m.GopoolPoolInfoPageModule)
  },
  {
    path: 'gopool-my-trips',
    loadChildren: () => import('./gopool-my-trips/gopool-my-trips.module').then(m => m.GopoolMyTripsPageModule)
  },
  {
    path: 'gopool-pool-taker-request',
    loadChildren: () => import('./gopool-pool-taker-request/gopool-pool-taker-request.module').then(m => m.GopoolPoolTakerRequestPageModule)
  },
  {
    path: 'gopool-pool-taker-info',
    loadChildren: () => import('./gopool-pool-taker-info/gopool-pool-taker-info.module').then(m => m.GopoolPoolTakerInfoPageModule)
  },
  {
    path: 'gopool-ride-accepted',
    loadChildren: () => import('./gopool-ride-accepted/gopool-ride-accepted.module').then(m => m.GopoolRideAcceptedPageModule)
  },
  {
    path: 'gopool-rate-ride-taker',
    loadChildren: () => import('./gopool-rate-ride-taker/gopool-rate-ride-taker.module').then(m => m.GopoolRateRideTakerPageModule)
  },
  {
    path: 'gopool-conversation',
    loadChildren: () => import('./gopool-conversation/gopool-conversation.module').then(m => m.GopoolConversationPageModule)
  },
  {
    path: 'gopool-account',
    loadChildren: () => import('./gopool-account/gopool-account.module').then(m => m.GopoolAccountPageModule)
  },
  {
    path: 'gopool-my-profile',
    loadChildren: () => import('./gopool-my-profile/gopool-my-profile.module').then(m => m.GopoolMyProfilePageModule)
  },
  {
    path: 'gopool-wallet',
    loadChildren: () => import('./gopool-wallet/gopool-wallet.module').then(m => m.GopoolWalletPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./gopool-tabs/gopool-tabs.module').then(m => m.GopoolTabsPageModule)
  },
  {
    path: 'gopool-chats',
    loadChildren: () => import('./gopool-chats/gopool-chats.module').then( m => m.GopoolChatsPageModule)
  },
  {
    path: 'gopool-select-location',
    loadChildren: () => import('./gopool-select-location/gopool-select-location.module').then( m => m.GopoolSelectLocationPageModule)
  },
  {
    path: 'gopool-ride-route',
    loadChildren: () => import('./gopool-ride-route/gopool-ride-route.module').then( m => m.GopoolRideRoutePageModule)
  },
  {
    path: 'gropot-sign-in',
    loadChildren: () => import('./gropot-sign-in/gropot-sign-in.module').then( m => m.GropotSignInPageModule)
  },
  {
    path: 'gropot-home',
    loadChildren: () => import('./gropot-home/gropot-home.module').then( m => m.GropotHomePageModule)
  },
  {
    path: 'gropot-select-location',
    loadChildren: () => import('./gropot-select-location/gropot-select-location.module').then( m => m.GropotSelectLocationPageModule)
  },
  {
    path: 'gropot-categories',
    loadChildren: () => import('./gropot-categories/gropot-categories.module').then( m => m.GropotCategoriesPageModule)
  },
  {
    path: 'gropot-sub-categories',
    loadChildren: () => import('./gropot-sub-categories/gropot-sub-categories.module').then( m => m.GropotSubCategoriesPageModule)
  },
  {
    path: 'gropot-item-info',
    loadChildren: () => import('./gropot-item-info/gropot-item-info.module').then( m => m.GropotItemInfoPageModule)
  },
  {
    path: 'gropot-my-cart',
    loadChildren: () => import('./gropot-my-cart/gropot-my-cart.module').then( m => m.GropotMyCartPageModule)
  },
  {
    path: 'gropot-coupon',
    loadChildren: () => import('./gropot-coupon/gropot-coupon.module').then( m => m.GropotCouponPageModule)
  },
  {
    path: 'gropot-my-orders',
    loadChildren: () => import('./gropot-my-orders/gropot-my-orders.module').then( m => m.GropotMyOrdersPageModule)
  },
  {
    path: 'gropot-order-info',
    loadChildren: () => import('./gropot-order-info/gropot-order-info.module').then( m => m.GropotOrderInfoPageModule)
  },
  {
    path: 'gropot-wallet',
    loadChildren: () => import('./gropot-wallet/gropot-wallet.module').then( m => m.GropotWalletPageModule)
  },
  {
    path: 'gropot-favorite',
    loadChildren: () => import('./gropot-favorite/gropot-favorite.module').then( m => m.GropotFavoritePageModule)
  },
  {
    path: 'gropot-support',
    loadChildren: () => import('./gropot-support/gropot-support.module').then( m => m.GropotSupportPageModule)
  },
  {
    path: 'gropot-account',
    loadChildren: () => import('./gropot-account/gropot-account.module').then( m => m.GropotAccountPageModule)
  },
  {
    path: 'gropot-payment-method',
    loadChildren: () => import('./gropot-payment-method/gropot-payment-method.module').then( m => m.GropotPaymentMethodPageModule)
  },
  {
    path: 'gropot-order-delivered',
    loadChildren: () => import('./gropot-order-delivered/gropot-order-delivered.module').then( m => m.GropotOrderDeliveredPageModule)
  },
  {
    path: 'handyzone-sign-in',
    loadChildren: () => import('./handyzone-sign-in/handyzone-sign-in.module').then( m => m.HandyzoneSignInPageModule)
  },
  {
    path: 'handyzone-home',
    loadChildren: () => import('./handyzone-home/handyzone-home.module').then( m => m.HandyzoneHomePageModule)
  },
  {
    path: 'handyzone-services',
    loadChildren: () => import('./handyzone-services/handyzone-services.module').then( m => m.HandyzoneServicesPageModule)
  },
  {
    path: 'handyzone-service-request',
    loadChildren: () => import('./handyzone-service-request/handyzone-service-request.module').then( m => m.HandyzoneServiceRequestPageModule)
  },
  {
    path: 'handyzone-providers',
    loadChildren: () => import('./handyzone-providers/handyzone-providers.module').then( m => m.HandyzoneProvidersPageModule)
  },
  {
    path: 'handyzone-provider-profile',
    loadChildren: () => import('./handyzone-provider-profile/handyzone-provider-profile.module').then( m => m.HandyzoneProviderProfilePageModule)
  },
  {
    path: 'handyzone-booking',
    loadChildren: () => import('./handyzone-booking/handyzone-booking.module').then( m => m.HandyzoneBookingPageModule)
  },
  {
    path: 'handyzone-my-bookings',
    loadChildren: () => import('./handyzone-my-bookings/handyzone-my-bookings.module').then( m => m.HandyzoneMyBookingsPageModule)
  },
  {
    path: 'handyzone-booking-info',
    loadChildren: () => import('./handyzone-booking-info/handyzone-booking-info.module').then( m => m.HandyzoneBookingInfoPageModule)
  },
  {
    path: 'handyzone-conversation',
    loadChildren: () => import('./handyzone-conversation/handyzone-conversation.module').then( m => m.HandyzoneConversationPageModule)
  },
  {
    path: 'handyzone-chat-list',
    loadChildren: () => import('./handyzone-chat-list/handyzone-chat-list.module').then( m => m.HandyzoneChatListPageModule)
  },
  {
    path: 'handyzone-account',
    loadChildren: () => import('./handyzone-account/handyzone-account.module').then( m => m.HandyzoneAccountPageModule)
  },
  {
    path: 'handyzone-wallet',
    loadChildren: () => import('./handyzone-wallet/handyzone-wallet.module').then( m => m.HandyzoneWalletPageModule)
  },
  {
    path: 'handyzone-support',
    loadChildren: () => import('./handyzone-support/handyzone-support.module').then( m => m.HandyzoneSupportPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./handyzone-tabs/handyzone-tabs.module').then( m => m.HandyzoneTabsPageModule)
  },
  {
    path: 'handyzone-search',
    loadChildren: () => import('./handyzone-search/handyzone-search.module').then( m => m.HandyzoneSearchPageModule)
  },
  {
    path: 'handyzone-work-ratings',
    loadChildren: () => import('./handyzone-work-ratings/handyzone-work-ratings.module').then( m => m.HandyzoneWorkRatingsPageModule)
  },
  {
    path: 'hungerz-sign-in',
    loadChildren: () => import('./hungerz-sign-in/hungerz-sign-in.module').then( m => m.HungerzSignInPageModule)
  },
  {
    path: 'hungerz-stores',
    loadChildren: () => import('./hungerz-stores/hungerz-stores.module').then( m => m.HungerzStoresPageModule)
  },
  {
    path: 'hungerz-variation-selection',
    loadChildren: () => import('./hungerz-variation-selection/hungerz-variation-selection.module').then( m => m.HungerzVariationSelectionPageModule)
  },
  {
    path: 'hungerz-ordering-method',
    loadChildren: () => import('./hungerz-ordering-method/hungerz-ordering-method.module').then( m => m.HungerzOrderingMethodPageModule)
  },
  {
    path: 'hungerz-confirm-order',
    loadChildren: () => import('./hungerz-confirm-order/hungerz-confirm-order.module').then( m => m.HungerzConfirmOrderPageModule)
  },
  {
    path: 'hungerz-payment',
    loadChildren: () => import('./hungerz-payment/hungerz-payment.module').then( m => m.HungerzPaymentPageModule)
  },
  {
    path: 'hungerz-restaurant-items',
    loadChildren: () => import('./hungerz-restaurant-items/hungerz-restaurant-items.module').then( m => m.HungerzRestaurantItemsPageModule)
  },
  {
    path: 'hungerz-my-orders',
    loadChildren: () => import('./hungerz-my-orders/hungerz-my-orders.module').then( m => m.HungerzMyOrdersPageModule)
  },
  {
    path: 'hungerz-order-detail',
    loadChildren: () => import('./hungerz-order-detail/hungerz-order-detail.module').then( m => m.HungerzOrderDetailPageModule)
  },
  {
    path: 'hungerz-chat',
    loadChildren: () => import('./hungerz-chat/hungerz-chat.module').then( m => m.HungerzChatPageModule)
  },
  {
    path: 'hungerz-add-review',
    loadChildren: () => import('./hungerz-add-review/hungerz-add-review.module').then( m => m.HungerzAddReviewPageModule)
  },
  {
    path: 'hungerz-my-account',
    loadChildren: () => import('./hungerz-my-account/hungerz-my-account.module').then( m => m.HungerzMyAccountPageModule)
  },
  {
    path: 'hungerz-wallet',
    loadChildren: () => import('./hungerz-wallet/hungerz-wallet.module').then( m => m.HungerzWalletPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./hungerz-tabs/hungerz-tabs.module').then( m => m.HungerzTabsPageModule)
  },
  {
    path: 'hungerz-book-table',
    loadChildren: () => import('./hungerz-book-table/hungerz-book-table.module').then( m => m.HungerzBookTablePageModule)
  },
  {
    path: 'qvid-sign-in',
    loadChildren: () => import('./qvid-sign-in/qvid-sign-in.module').then( m => m.QvidSignInPageModule)
  },
  {
    path: 'qvid-edit-profile',
    loadChildren: () => import('./qvid-edit-profile/qvid-edit-profile.module').then( m => m.QvidEditProfilePageModule)
  },
  {
    path: 'qvid-home',
    loadChildren: () => import('./qvid-home/qvid-home.module').then( m => m.QvidHomePageModule)
  },
  {
    path: 'qvid-comment',
    loadChildren: () => import('./qvid-comment/qvid-comment.module').then( m => m.QvidCommentPageModule)
  },
  {
    path: 'qvid-user-profile',
    loadChildren: () => import('./qvid-user-profile/qvid-user-profile.module').then( m => m.QvidUserProfilePageModule)
  },
  {
    path: 'qvid-followers',
    loadChildren: () => import('./qvid-followers/qvid-followers.module').then( m => m.QvidFollowersPageModule)
  },
  {
    path: 'qvid-explore',
    loadChildren: () => import('./qvid-explore/qvid-explore.module').then( m => m.QvidExplorePageModule)
  },
  {
    path: 'qvid-search-result',
    loadChildren: () => import('./qvid-search-result/qvid-search-result.module').then( m => m.QvidSearchResultPageModule)
  },
  {
    path: 'qvid-addvideo',
    loadChildren: () => import('./qvid-addvideo/qvid-addvideo.module').then( m => m.QvidAddvideoPageModule)
  },
  {
    path: 'qvid-filter',
    loadChildren: () => import('./qvid-filter/qvid-filter.module').then( m => m.QvidFilterPageModule)
  },
  {
    path: 'qvid-post-info',
    loadChildren: () => import('./qvid-post-info/qvid-post-info.module').then( m => m.QvidPostInfoPageModule)
  },
  {
    path: 'qvid-notification',
    loadChildren: () => import('./qvid-notification/qvid-notification.module').then( m => m.QvidNotificationPageModule)
  },
  {
    path: 'qvid-chat',
    loadChildren: () => import('./qvid-chat/qvid-chat.module').then( m => m.QvidChatPageModule)
  },
  {
    path: 'qvid-my-profile',
    loadChildren: () => import('./qvid-my-profile/qvid-my-profile.module').then( m => m.QvidMyProfilePageModule)
  },
  {
    path: 'qvid-videoview',
    loadChildren: () => import('./qvid-videoview/qvid-videoview.module').then( m => m.QvidVideoviewPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./qvid-tabs/qvid-tabs.module').then( m => m.QvidTabsPageModule)
  },
  {
    path: 'shophour-sign-in',
    loadChildren: () => import('./shophour-sign-in/shophour-sign-in.module').then( m => m.ShophourSignInPageModule)
  },
  {
    path: 'shophour-home',
    loadChildren: () => import('./shophour-home/shophour-home.module').then( m => m.ShophourHomePageModule)
  },
  {
    path: 'shophour-item',
    loadChildren: () => import('./shophour-item/shophour-item.module').then( m => m.ShophourItemPageModule)
  },
  {
    path: 'shophour-search',
    loadChildren: () => import('./shophour-search/shophour-search.module').then( m => m.ShophourSearchPageModule)
  },
  {
    path: 'shophour-search-result',
    loadChildren: () => import('./shophour-search-result/shophour-search-result.module').then( m => m.ShophourSearchResultPageModule)
  },
  {
    path: 'shophour-item-detail',
    loadChildren: () => import('./shophour-item-detail/shophour-item-detail.module').then( m => m.ShophourItemDetailPageModule)
  },
  {
    path: 'shophour-reviews',
    loadChildren: () => import('./shophour-reviews/shophour-reviews.module').then( m => m.ShophourReviewsPageModule)
  },
  {
    path: 'shophour-seller-info',
    loadChildren: () => import('./shophour-seller-info/shophour-seller-info.module').then( m => m.ShophourSellerInfoPageModule)
  },
  {
    path: 'shophour-cart',
    loadChildren: () => import('./shophour-cart/shophour-cart.module').then( m => m.ShophourCartPageModule)
  },
  {
    path: 'shophour-select-address',
    loadChildren: () => import('./shophour-select-address/shophour-select-address.module').then( m => m.ShophourSelectAddressPageModule)
  },
  {
    path: 'shophour-payment-mode',
    loadChildren: () => import('./shophour-payment-mode/shophour-payment-mode.module').then( m => m.ShophourPaymentModePageModule)
  },
  {
    path: 'shophour-order-confirm',
    loadChildren: () => import('./shophour-order-confirm/shophour-order-confirm.module').then( m => m.ShophourOrderConfirmPageModule)
  },
  {
    path: 'shophour-offers',
    loadChildren: () => import('./shophour-offers/shophour-offers.module').then( m => m.ShophourOffersPageModule)
  },
  {
    path: 'shophour-my-orders',
    loadChildren: () => import('./shophour-my-orders/shophour-my-orders.module').then( m => m.ShophourMyOrdersPageModule)
  },
  {
    path: 'shophour-add-review',
    loadChildren: () => import('./shophour-add-review/shophour-add-review.module').then( m => m.ShophourAddReviewPageModule)
  },
  {
    path: 'woochat-sign-in',
    loadChildren: () => import('./woochat-sign-in/woochat-sign-in.module').then( m => m.WoochatSignInPageModule)
  },
  {
    path: 'woochat-chat-list',
    loadChildren: () => import('./woochat-chat-list/woochat-chat-list.module').then( m => m.WoochatChatListPageModule)
  },
  {
    path: 'woochat-new-chat',
    loadChildren: () => import('./woochat-new-chat/woochat-new-chat.module').then( m => m.WoochatNewChatPageModule)
  },
  {
    path: 'woochat-chatting',
    loadChildren: () => import('./woochat-chatting/woochat-chatting.module').then( m => m.WoochatChattingPageModule)
  },
  {
    path: 'woochat-profile-info',
    loadChildren: () => import('./woochat-profile-info/woochat-profile-info.module').then( m => m.WoochatProfileInfoPageModule)
  },
  {
    path: 'woochat-grup-list',
    loadChildren: () => import('./woochat-grup-list/woochat-grup-list.module').then( m => m.WoochatGrupListPageModule)
  },
  {
    path: 'woochat-create-group',
    loadChildren: () => import('./woochat-create-group/woochat-create-group.module').then( m => m.WoochatCreateGroupPageModule)
  },
  {
    path: 'woochat-group-chatting',
    loadChildren: () => import('./woochat-group-chatting/woochat-group-chatting.module').then( m => m.WoochatGroupChattingPageModule)
  },
  {
    path: 'woochat-group-info',
    loadChildren: () => import('./woochat-group-info/woochat-group-info.module').then( m => m.WoochatGroupInfoPageModule)
  },
  {
    path: 'woochat-voicecall',
    loadChildren: () => import('./woochat-voicecall/woochat-voicecall.module').then( m => m.WoochatVoicecallPageModule)
  },
  {
    path: 'woochat-more',
    loadChildren: () => import('./woochat-more/woochat-more.module').then( m => m.WoochatMorePageModule)
  },
  {
    path: 'woochat-media-shared',
    loadChildren: () => import('./woochat-media-shared/woochat-media-shared.module').then( m => m.WoochatMediaSharedPageModule)
  },
  {
    path: 'woochat-call-logs',
    loadChildren: () => import('./woochat-call-logs/woochat-call-logs.module').then( m => m.WoochatCallLogsPageModule)
  },
  {
    path: 'woochat-video-call',
    loadChildren: () => import('./woochat-video-call/woochat-video-call.module').then( m => m.WoochatVideoCallPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./woochat-tabs/woochat-tabs.module').then( m => m.WoochatTabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
