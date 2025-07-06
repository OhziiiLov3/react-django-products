from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    #  Only allow owners to edit or delete. Everyone can read.  
    def has_object_permission(self, request, view, obj):
        # SAFE_METHODS are GET, HEAD, OPTIONS
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.owner == request.user
