import { getSearchResult, getData } from '../../fetch/fetch';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams);
  try {
    const heroes =
      searchParams.get('search') === '' || undefined
        ? await getData()
        : await getSearchResult({ searchParams });
    return NextResponse.json(heroes);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      apiMessage: { errorMsg: 'Internal Server Error, Please try again later' },
    });
  }
};

export async function POST(req) {}
