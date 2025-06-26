import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export async function handleSubmit(e: any, router: AppRouterInstance) {
  e.preventDefault();
  try {
    console.log(e, router);
  } catch (err) {
    console.log(err);
  }
}
