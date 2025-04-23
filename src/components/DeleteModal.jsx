import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";

import Cookies from "js-cookie";

import { deleteRelease } from "@/store/deleteReleaseDataSlice";
import { fetchReleaseData } from "@/store/getReleaseDataSlice";
const DeleteModal = ({ onClose, releaseId, appId }) => {
  console.log("rid2", releaseId);

  const dispatch = useDispatch();
  const accessToken = Cookies.get("token");
  const triggerFetchData = () => {
    if (accessToken) {
      dispatch(fetchReleaseData({ accessToken, appId }));
    }
  };
  const handleDelete = () => {
    dispatch(deleteRelease({ accessToken, releaseId }))
      .then((response) => {
        if (response.payload.success) {
          // notifySuccess();
          triggerFetchData();

          // Close the modal immediately
          onClose();
        } else {
          // notifyFailure();
          setTimeout(() => {
            onClose();
          }, 1000);
        }
      })
      .catch(() => {
        // notifyFailure();
        setTimeout(() => {
          onClose();
        }, 1000);
      });
    console.log("deleted");
  };
  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            release and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
