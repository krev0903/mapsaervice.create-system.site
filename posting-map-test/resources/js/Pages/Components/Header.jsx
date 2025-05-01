import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Header() {
  // usePageフックを使ってページに関連するデータを取得
  const { props } = usePage();

  // ページごとにタイトルを動的に設定
  const pageTitle = props.pageTitle || 'ページタイトルを設定して下さい';

  useEffect(() => {
    // タイトルを動的に設定
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="mx-2 text-[1.5rem] whitespace-nowrap font-bold sm:mx-10 sm:text-[2rem]">
          {pageTitle}
        </h2>
      }
    >
    </AuthenticatedLayout>
  );
}
