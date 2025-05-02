import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    ようこそ！！
                </h2>
            }
        >
        <Head title="Dashboard" />

        <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <p>
                            {props.name} さんのページ
                        </p>

                        {/* 注文履歴の表示 */}
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">注文履歴</h3>
                            {props.orders.length > 0 ? (
                                <div className="space-y-4">
                                    {props.orders.map((order) => (
                                        <div
                                            key={order.id}
                                            className="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200 sm:w-[300px]"
                                        >
                                            <div className="flex justify-between items-center mb-3">
                                                <p className="text-lg font-medium text-gray-700">
                                                    注文番号: {order.id}
                                                </p>
                                                <p className="text-lg font-medium text-indigo-600">
                                                    <div>
                                                        注文金額
                                                    </div>
                                                    <div>
                                                        ¥{order.total_price}
                                                    </div>
                                                </p>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                注文日: {new Date(order.created_at).toLocaleString()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-600">注文履歴がありません</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
