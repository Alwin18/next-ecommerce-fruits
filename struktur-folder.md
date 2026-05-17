src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                          # Home
│   │   │
│   │   ├── splash/
│   │   │   └── page.tsx
│   │   │
│   │   ├── onboarding/
│   │   │   └── page.tsx
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx                     # Product listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx                 # Product detail
│   │   │
│   │   └── search/
│   │       └── page.tsx
│   │
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── register/
│   │   │   └── page.tsx
│   │   │
│   │   └── forgot-password/
│   │       └── page.tsx
│   │
│   ├── (user)/
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   │
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   │
│   │   ├── wishlist/
│   │   │   └── page.tsx
│   │   │
│   │   └── profile/
│   │       ├── page.tsx
│   │       │
│   │       ├── address/
│   │       │   └── page.tsx
│   │       │
│   │       └── orders/
│   │           └── page.tsx
│   │
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   |   ├── header/
│   |   │   ├── header.tsx
│   |   │   ├── desktop-header.tsx
│   |   │   ├── mobile-header.tsx
│   |   │   ├── search-bar.tsx
│   |   │   ├── category-menu.tsx
│   |   │   ├── cart-button.tsx
│   |   │   ├── wishlist-button.tsx
│   |   │   ├── account-menu.tsx
│   |   │   └── logo.tsx
│   |   │
│   |   ├── footer/
│   |   │   ├── footer.tsx
│   |   │   ├── footer-links.tsx
│   |   │   ├── footer-contact.tsx
│   |   │   ├── footer-social.tsx
│   |   │   └── newsletter-form.tsx
│   |   │
│   |   ├── sidebar/
│   |   │   ├── sidebar.tsx
│   |   │   ├── sidebar-menu.tsx
│   |   │   ├── sidebar-category.tsx
│   |   │   ├── sidebar-filter.tsx
│   |   │   └── sidebar-account.tsx
│   |   │
│   |   └── mobile-nav/
│   |       ├── mobile-nav.tsx
│   |       ├── mobile-nav-menu.tsx
│   |       ├── mobile-nav-item.tsx
│   |       ├── mobile-bottom-bar.tsx
│   |       └── mobile-drawer.tsx
│   │
│   ├── auth/
│   │   ├── login-form/
│   │   ├── register-form/
│   │   └── forgot-password-form/
│   │
│   ├── home/
│   │   ├── hero/
│   │   ├── categories/
│   │   ├── featured-products/
│   │   └── banners/
│   │
│   ├── product/
│   │   ├── product-card/
│   │   ├── product-grid/
│   │   ├── product-gallery/
│   │   ├── product-info/
│   │   └── product-reviews/
│   │
│   ├── cart/
│   │   ├── cart-item/
│   │   ├── cart-summary/
│   │   └── coupon-form/
│   │
│   ├── checkout/
│   │   ├── shipping-form/
│   │   ├── payment-method/
│   │   └── order-summary/
│   │
│   ├── wishlist/
│   │   └── wishlist-item/
│   │
│   ├── profile/
│   │   ├── profile-info/
│   │   ├── address-list/
│   │   └── order-list/
│   │
│   └── ui/
│
├── lib/
│   └── utils.ts
│
├── hooks/
│
├── types/
│
├── constants/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── products/
│
└── styles/