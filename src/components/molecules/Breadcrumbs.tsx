import React, { useEffect, useState } from "react";
import { Breadcrumbs, Link, Typography } from '@mui/material';

interface BreadcrumbsProps {
  // breadcrumbs: React.SetStateAction<never[]>
  breadcrumbs: Array<string>
}

const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BasicBreadcrumbs = (prop: BreadcrumbsProps) => {

  const BreadcrumbItems = prop.breadcrumbs.map((breadcrumb) => {
    <Link underline="hover" color="inherit" href="/">
      {breadcrumb}
    </Link>
  })


  return (
    <div role="presentation" onClick={handleClick}>
      {BreadcrumbItems}
    </div>
  );
}

export default BasicBreadcrumbs;
