import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Header() {
  const { auth } = usePage().props;  // Inertia.js の usePage フックで auth を取得

  return (
    <>
      <AuthenticatedLayout
        header={
          <h2 className="mx-10 text-[32px] whitespace-nowrap font-bold">
            ポスティングエリアを選択して下さい
          </h2>
        }
      >  
        {/* <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
          <header className="grid grid-cols-2 items-center gap-2 py-5 lg:grid-cols-3 bg-gray-300">
            <div className="flex lg:col-start-2 lg:justify-center">
              <div className=''>
              </div>
            </div>
            <nav className="-mx-3 flex flex-1 justify-end">
              {auth && auth.user ? (  // auth.user の存在を確認
                <>
                  <Link
                    href={route('dashboard')}
                    className="mr-[20px] rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    マイページ
                  </Link>
                  <Link
                    href={route('areas_edit')}
                    className="mr-[20px] rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    エリア編集
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={route('login')}
                    className="mr-[20px] rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    ログイン
                  </Link>
                  <Link
                    href={route('register')}
                    className="mr-[20px] rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    登録
                  </Link>
                </>
              )}
            </nav>
          </header>
        </div>
      </AuthenticatedLayout>
      ):( 
      <AuthenticatedLayout>
                <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
          <header className="grid grid-cols-2 items-center gap-2 py-5 lg:grid-cols-3 bg-gray-300">
            <div className="flex lg:col-start-2 lg:justify-center">
              <div className=''>
              </div>
            </div>
            <nav className="-mx-3 flex flex-1 justify-end">
                <>
                  <Link
                    href={route('login')}
                    className="mr-[20px] rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    ログイン
                  </Link>
                  <Link
                    href={route('register')}
                    className="mr-[20px] rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                  >
                    登録
                  </Link>
                </>
              
            </nav>
          </header>
        </div> */}
      </AuthenticatedLayout>
    </>
  );
}
